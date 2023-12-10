
echo "$GHCR_PRIVATE_TOKEN" | docker login -u "$GHCR_USERNAME" --password-stdin ghcr.io

# Pull the Docker image from GitHub Container Registry
docker pull $DOCKER_IMAGE

# Stop and remove the existing container (if any)
docker stop material-design-components-storybook || true
docker rm -f material-design-components-storybook || true

docker rmi ghcr.io/munoz-santiago/material-design-components/storybook || true
docker pull ghcr.io/munoz-santiago/material-design-components/storybook

# Run the Docker container on the droplet
docker run -d --name material-design-components-storybook -p 9002:80 \
    --network traefik_proxy \
    --label "traefik.http.routers.material-design-components-storybook.rule=PathPrefix(\`/react-components\`)" \
    ghcr.io/munoz-santiago/material-design-components/storybook
