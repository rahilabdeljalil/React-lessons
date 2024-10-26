#!/bin/bash
# This script undoes a specific commit while keeping other changes intact
if [ -z "$1" ]; then
    echo "Please provide the commit hash to undo. Usage: ./undo.sh <commit-hash>"
    exit 1
fi

git revert "$1" --no-edit