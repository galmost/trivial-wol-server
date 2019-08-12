# trivial-wol-server
Simple Wake on Lan service
## Table of contents
* [General info](#general-info)
* [Commands](#commands)
* [Setup](#setup)
* [Docker](#docker)

## General info
This project is a trivial wake on lan node js app server.
The desire was to have something small to be used for home automation tasks.
Basically a good excuse to play around with js and containers.

A better and bulkier option for a wol server can be found at:
https://github.com/nperez0111/wol-server

## Setup
To run this project, install it locally using npm:
```
$ [sudo] npm install [-g] trivial-wol-server
$ cd node_modules/trivial-wol-server
```
Then any of the following options for starting the app:
```
$ npm start
```
or
```
$ node trivial_wol_server.sj
```

#### Just in case...
Currently, the only dependency is on the wol module.
If for any reason you are unable to satisfy that dependency via npm:
https://github.com/song940/wake-on-lan

The brains of the operation :)

## Docker
- From dockerhub:

A prebaked container can be found [here](https://hub.docker.com/r/galmostdocker/trivial-wol-server)

- From source:
using docker commands
```
$ docker build . -t trivial-wol-server
$ docker run -p 30000:30000 trivial-wol-server
```
or docker-compose
```
$ docker-compose up
```

## Commands
- To check service is up and get a snappy comment:
```
http:\\127.0.0.1:30000\
```
- To issue a wake on lan call:
```
http:\\127.0.0.1:30000\?mac=4A:E5:52:91:84:07
```
