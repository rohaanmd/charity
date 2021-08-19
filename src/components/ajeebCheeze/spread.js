var obj = {
    name:"rohaan",
    val:"LL"
  }
  
  var arr2 = ["pe",0,88]
  var obj3 =  [...arr2]
  
  obj3.push("jxsadasj")
  
  var ks ={
    ...obj,
    ...arr2,
    default:"this is default"
  }
  
  


  console.log(ks)

  console.log({arr2})
  console.log({obj3})