#!/bin/bash
VERSION="2.0.0"

docker build -t user-demo:$VERSION .
docker tag  user-demo:$VERSION tinsae/user-demo:$VERSION
docker push tinsae/user-demo:$VERSION
```

