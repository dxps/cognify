#!/bin/sh

## Source the .env file (export the settings as env vars).
export `[ ! -f .env ] || egrep -v '^#|^[[:space:]]*$' .env`

npm run dev

