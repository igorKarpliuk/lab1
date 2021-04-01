const SpaceStation=require('./SpaceStation')
const Planet=require('./Planet');
const Cargo=require('./Cargo')
const CargoFinished=require('./CargoFinished')
let SpaceStations=[]
let Planets=[]
let Cargos=[]
//////////////////////////////////////////////////////////////
let planet2=new Planet('Earth',100,100,12304,10002)
//Додавання планети в колекцію
Planets.push(new Planet('Mars',1300,1200,12,3000),planet2,new Planet('M-321',13000,11100,1111112,3022200))
//Редагування планети в колекції
Planets[0].x+=100
//Видалення планет(-и) з колекції
Planets.splice(0,1)
//Пошук планети в колекції
let i=0
Planets.forEach(function(item)
{
    if(item.name=='Earth')
    {
        console.log('Шукана планета:')
        console.dir(item)
        i++
    }
})
if(i==0) console.log('Даної планети немає в колекції')
console.log(Planets)
///////////////////////////////////////////////////////////////////
//Додавання нової станції в колекцію
SpaceStations.push( new SpaceStation('SpaceX',1332,Planets[0]), new SpaceStation('SpaceX-2',1333,Planets[0]),
new SpaceStation('SpaceX-3',1334,Planets[0]),new SpaceStation('SpaceX',2331,Planets[1]))
//Редагування станції в колекції
SpaceStations[0].name+='-1'
//Видалення станції з колекції
SpaceStations.pop()
//Пошук однієї станції в колекції
i=0;
SpaceStations.forEach(function(item)
{
    if(item.number==1334)
    {
        console.log('Шукана станція:')
        console.dir(item)
        i++
    }
})
if(i==0) console.log('Даної станції немає в колекції')
console.log(SpaceStations)
///////////////////////////////////////////////////////////
let Cargo1=new Cargo(1,1,Planets[0],SpaceStations[0],Date())
let Cargo2=new CargoFinished(2,0.5,SpaceStations[0],Planets[0],'2019-12-19','2021-1-2')
//Додавання вантажу в колекцію
Cargos.push(Cargo1,Cargo2, new Cargo(3,0.03,SpaceStations[1],SpaceStations[2],'2021-3-10'))
//Редагування вантажу в колекції
Cargos[Cargos.length-1].terminal=Planets[1]
//Видалення вантажу з колекції
Cargos.shift()
console.log(Cargos)
/////////////////////////////////////
//Пошук усіх станцій планети
SpaceStations.forEach(function(item)
{
    console.log('Станція планети '+`${Planets[0].name}`+':')
    if(item.planet==Planets[0])
    {
        console.dir(item)
    }
})