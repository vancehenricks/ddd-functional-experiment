#!/bin/bash
read -p "Are you sure you want to delete every container, including volumes(yes/no*)?" REPLY
if [ "$REPLY" == "yes" ]; then
   docker compose down -v
fi

