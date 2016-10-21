# node-uuid-custom

## install

```
npm i @you21979/uuid-custom
```

## usage

```
var uuid = require('@you21979/uuid-custom');
var uuids = [
    "dog",
    "cat",
    "horse",
    "wolf",
    "kangaroo",
    "hippopotamus",
    "human"
].map(function(v){
    return uuid.v1(v)
})

console.log(uuids)
```

### result1

```
[ 'd1d46d80-974b-11e6-a801-cd6357efdd96',
  'd1d49490-974b-11e6-a801-77af778b51ab',
  'd1d49491-974b-11e6-a801-fd62862b6dc2',
  'd1d49492-974b-11e6-a801-f76b61b962db',
  'd1d49493-974b-11e6-a801-4a3484b3bf2f',
  'd1d49494-974b-11e6-a801-db35fb45d1eb',
  'd1d49495-974b-11e6-a801-79a5478768d2' ]
```

### result2

```
[ 'd3188640-974b-11e6-8348-cd6357efdd96',
  'd318ad50-974b-11e6-8348-77af778b51ab',
  'd318ad51-974b-11e6-8348-fd62862b6dc2',
  'd318ad52-974b-11e6-8348-f76b61b962db',
  'd318ad53-974b-11e6-8348-4a3484b3bf2f',
  'd318ad54-974b-11e6-8348-db35fb45d1eb',
  'd318ad55-974b-11e6-8348-79a5478768d2' ]
```
