var abc="wHaT"
    document.write(abc.toUpperCase())
    document.write("<br>")
    document.write(abc.toLowerCase())
    document.write("<br>")
    document.write(abc.startsWith("i"))
    document.write("<br>")
    var person = {
      name:"aryan",
      age:13,
      school:"dps-sec-122-noida",
    }
    document.write(person.age)
    document.write("<br>")
    document.write(Math.acos(-1))
    document.write("<br>")
    
    function findmax(){
      var max=0;
      for(i=0; i<arguments.length; i++){
        if( arguments[i] > max ){
          max=arguments[i]
        }
        
      }
      return max;
    }
    document.write(findmax(10,20,30,40,50))
    var array = ["HELLO","MY","NAME","IS","ARYAN"]
    document.write("<br>")
    document.write(array[2])
    document.write("<br>")
    document.write(array.join("*"))
    document.write("<br>")
    array.pop()
    document.write(array)
    function add(a,b)  {
      
      var ans = a+b
    return ans
      
    }
    function average(a,b)  {
      
      
      return add (a,b)/2
      
    }
    document.write("<br>")
    document.write(average(9,8))


  

   