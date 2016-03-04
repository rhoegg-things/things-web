#!/bin/bash
GROUP_NAME=things
LOCATION="West US"

azure group delete -q "$GROUP_NAME" && \
azure group create -n "$GROUP_NAME" -l "$LOCATION" && \
azure group deployment create -f azuredeploy.json -e azuredeploy.parameters.json -g "$GROUP_NAME" -n ThingsDeployment --nowait
