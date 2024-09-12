# Utiliser une image officielle de Node.js comme base
FROM node:18-alpine

# Installer http-server pour servir des fichiers statiques
RUN npm install -g http-server

# Créer un répertoire de travail
WORKDIR /app

# Copier tout le contenu dans le conteneur
COPY . .

# Exposer le port que http-server utilise
EXPOSE 8080

# Démarrer http-server sur le port 8080
CMD ["http-server", "-p", "8080"]
