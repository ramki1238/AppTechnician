
interface StatesDatabase{
    id:number
    statename:string
    datecreated:string
  }
  interface DistrictDatabase{
    id:number
    stateid:number
    distname:string
    datecreated:string
  }
  
  interface CityDatabase{
    id:number
    stateid:number
    distid:number
    mandalename:string
    datecreated:string
  }
  