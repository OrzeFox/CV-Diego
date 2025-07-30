#!/bin/bash

# Script para configurar el repositorio remoto de GitHub
# CV Diego Cruz - Setup Repository

echo "🚀 Configurando repositorio para CV Diego Cruz..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Verificar si git está configurado
if ! git config --global user.name > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  Git no está configurado. Configurando...${NC}"
    echo -e "${BLUE}Por favor, ingresa tu nombre de usuario de Git:${NC}"
    read -r git_username
    echo -e "${BLUE}Por favor, ingresa tu email de Git:${NC}"
    read -r git_email
    
    git config --global user.name "$git_username"
    git config --global user.email "$git_email"
    echo -e "${GREEN}✅ Git configurado correctamente${NC}"
fi

# Verificar si el repositorio remoto ya existe
if git remote get-url origin > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  El repositorio remoto ya está configurado${NC}"
    echo -e "${BLUE}URL actual:${NC}"
    git remote get-url origin
    echo ""
    echo -e "${BLUE}¿Quieres cambiar la URL del repositorio? (y/n):${NC}"
    read -r change_url
    if [[ $change_url == "y" || $change_url == "Y" ]]; then
        echo -e "${BLUE}Ingresa la nueva URL del repositorio:${NC}"
        read -r new_url
        git remote set-url origin "$new_url"
        echo -e "${GREEN}✅ URL del repositorio actualizada${NC}"
    fi
else
    echo -e "${BLUE}Ingresa la URL del repositorio de GitHub:${NC}"
    echo -e "${YELLOW}Ejemplo: https://github.com/OrzeFox/cv-diego-cruz.git${NC}"
    read -r repo_url
    git remote add origin "$repo_url"
    echo -e "${GREEN}✅ Repositorio remoto agregado${NC}"
fi

# Verificar si hay cambios pendientes
if [[ -n $(git status --porcelain) ]]; then
    echo -e "${YELLOW}⚠️  Hay cambios pendientes. Agregando y haciendo commit...${NC}"
    git add .
    git commit -m "Actualizar CV y configuración"
fi

# Push al repositorio remoto
echo -e "${BLUE}🔄 Haciendo push al repositorio remoto...${NC}"
if git push -u origin main; then
    echo -e "${GREEN}✅ Repositorio subido exitosamente a GitHub${NC}"
    echo ""
    echo -e "${GREEN}🎉 ¡Configuración completada!${NC}"
    echo ""
    echo -e "${BLUE}📋 Próximos pasos:${NC}"
    echo "1. Ve a tu repositorio en GitHub"
    echo "2. Activa GitHub Pages en Settings > Pages"
    echo "3. Selecciona la rama 'gh-pages' como fuente"
    echo "4. Tu CV estará disponible en: https://[tu-usuario].github.io/cv-diego-cruz"
    echo ""
    echo -e "${BLUE}🔧 Para futuras actualizaciones:${NC}"
    echo "git add ."
    echo "git commit -m 'Mensaje descriptivo'"
    echo "git push origin main"
    echo ""
    echo -e "${GREEN}✨ ¡Tu CV profesional está listo!${NC}"
else
    echo -e "${RED}❌ Error al hacer push. Verifica la URL del repositorio y tus credenciales.${NC}"
    echo -e "${YELLOW}💡 Asegúrate de que el repositorio existe en GitHub y tienes permisos.${NC}"
fi 