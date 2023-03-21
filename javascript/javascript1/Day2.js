let customers = {
    Firstname : "Anjila",
    lastname : "katuwal",
    city : "oklahoma"


}
//retrive - printing the value
console.log(customers.Firstname),
console.log(customers.lastname),
console.log(customers.city)

//updating data
customers.Firstname = "Bhagwati"
customers.lastname = "Dahal"
customers.city = "texas"
console.log(customers.Firstname)



// add
customers.age = "26"
customers.id = 1
console.log(customers)

//delete
delete customers.lastname
console.log(customers)
