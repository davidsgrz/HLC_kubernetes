#!/bin/sh
set -e

echo "Comprobando configuración nginx..."
nginx -t

echo "Arrancando nginx en foreground..."
nginx 