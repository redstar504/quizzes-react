#!/bin/bash

docker build --no-cache --target nginx -t redstar504/quiz-frontend:latest .
docker push redstar504/quiz-frontend:latest
kubectl rollout restart deployment quiz-frontend