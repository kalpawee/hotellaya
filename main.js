// getting dom elemsnts for room booking

const branchinput = document.getElementById("branchselection");
const ChildInput = document.getElementById("childinput");
const SRInput = document.getElementById("SingleRoominput");
const DRInput = document.getElementById("DoubleRoominput");
const TRInput = document.getElementById("TripleRoominput");
const PromoCode = document.getElementById("Promocode");
const OutputText1 = document.getElementById("outputtext1");
const DaysInput = document.getElementById("daysinput");
const ExtraRqInput = document.getElementsByName("ExtraRequirements");
const CostForNow = document.getElementById("Costfornow");
const BookBtn = document.getElementById("addBookingBtn");
const output5Txt = document.getElementById("output5");
const output7Txt = document.getElementById("output7");
const roombookingname = document.getElementById("fnameinput");
const brachselect = document.getElementById("branchselection");
const roombookingadults = document.getElementById("adultsinput");


// getting dom elements for advenure booking

const AdvAdultInput = document.getElementById("advadultsinput");
const AdvChildInput = document.getElementById("advchildinput");
const Addtofavbtn = document.getElementById("addToFavBtn");
const checkloyaltypointsbtn = document.getElementById("CheckLoyaltyPBtn");
const DivingGuide = document.getElementsByName("divingguide");
const Advdetails = document.getElementById("Adventuredetails");
const Addadvbtn = document.getElementById("addAdventureBtn");
const nationalityinput = document.getElementById("nationality");
const output3text = document.getElementById("output3")
const Adventurename = document.getElementById("Advname")
const OverallbookingBtn = document.getElementById("overallbooking");
const overallpopusdetailsoutput = document.getElementById("overallpopusdetails");
const emaildetails = document.getElementById("emailid");

// adding event listners for booking

BookBtn.addEventListener("click", finalbooking);
ExtraRqInput.forEach(item => item.addEventListener("change", extrachange))


// adding event listners for adventure

DivingGuide.forEach(item => item.addEventListener("change",ChangeDivingGuide));
Addadvbtn.addEventListener("click", addAdventure);
Addtofavbtn.addEventListener("click", addToFaviourites);
checkloyaltypointsbtn.addEventListener("click", Loyaltypoints);
OverallbookingBtn.addEventListener("click", OverallBookBtn )

// declaring variables

// booking variables

let bookname;
let roombookadults;
let branchselectionname;
let singlerooms;
let doublerooms;
let triplerooms;
let noofrooms;
let costsingleroom;
let costdoubleroom;
let costtripleroom;
let roomtotal;
let noofdays;
let child5;
let childcost;
let promo;
let extrabed;
let extrabedcost;
let promoinput;
let promodiscount;
let finalcost;
let finalpayment;
let wifi;
let poolView;
let EmailDetails;
// adventure variables

let adultguide;
let kidsguide;
let noofadult;
let noofkids;
let adultguidecost;
let kidsguidecost;
let LoyaltyPoints;
let adventurecost;
let nationality;
let divingadultcost;
let divingkidscost;
let advbookingname;
let finalroomtotal;




// function intinalzing

function initialize(){
    bookname="";
    roombookadults=0;
    branchselectionname="";
    singlerooms=0;
    doublerooms=0;
    doublerooms=0;
    triplerooms=0;
    noofrooms-0;
    noofdays=0;
    costsingleroom=0;
    costdoubleroom=0;
    costtripleroom=0;
    roomtotal=0;
    child5=0;
    childcost=0;
    promo="No promo code added";
    promoinput="";
    promodiscount=0;
    finalcost=0;
    finalpayment=0;
    extrabed="No extra bed added"
    extrabedcost=0;
    wifi ="";
    poolView="";
    finalroomtotal=0;
    EmailDetails="";

    adultguide="";
    kidsguide="";
    adultguidecost=0;
    kidsguidecost=0;
    LoyaltyPoints=0;
    adventurecost=0;
    noofadult=0;
    noofkids=0;
    nationality="";
    divingadultcost=0;
    divingkidscost=0;
    advbookingname="";

}



function roomprizecalculation(){
    singlerooms = parseInt(SRInput.value);
    doublerooms = parseInt(DRInput.value);
    triplerooms = parseInt(TRInput.value);
    child5 = parseInt(ChildInput.value);
    noofdays = parseInt(DaysInput.value);
    bookname = roombookingname.value;
    branchselectionname = brachselect.value;

    costsingleroom = singlerooms*25000;
    costdoubleroom = doublerooms*35000;
    costtripleroom = triplerooms*40000;
    roomtotal = costsingleroom + costdoubleroom + costtripleroom
    childcost = child5 * 5000;

    finalroomtotal = noofdays*roomtotal
    
    finalcost = noofdays*(roomtotal + childcost + extrabedcost)
    CostForNow.innerText = `No promo LKR ${finalcost}/-`
    OutputText1.innerText = `Hii ${bookname}
    You have selected our ${branchselectionname} Branch
    You have booked :-
    Single rooms : ${singlerooms} rooms
    Double rooms : ${doublerooms} rooms
    Triple rooms : ${triplerooms} rooms
    With ${extrabed} 
    The final cost is(${promo}) LKR ${finalcost}/-`;
}




function finalbooking(){
    roomprizecalculation();
    // singlerooms = parseInt(SRInput.value);
    // doublerooms = parseInt(DRInput.value);
    // triplerooms = parseInt(TRInput.value);
    // child5 = parseInt(ChildInput.value);
    // noofdays = parseInt(DaysInput.value);
    promoinput = PromoCode.value;

    if(promoinput ==="Promo123"){
        promo =" promo code added"
        promodiscount = finalcost*(5/100)
        finalcost -= promodiscount
        finalpayment = finalcost;
        output5Txt.innerText = `The final cost is(With Promotion) LKR ${finalpayment}/-`;
        output7Txt.innerText = ` With Promo LKR ${finalpayment}/-`
    }else {
        finalcost = finalpayment
    }

    
}



function extrachange(){
    if(this.value == "WiFi"){
        if(this.checked){
            wifi = "WIFI Included ";
        }else{
            wifi = " ";
        }
    }else if(this.value == "pool"){
        poolView = " Pool View Included";
    }else if(this.value == "garden"){
        poolView = " Garden View Included";
    }else if(this.value == "ExtraBed"){
        if(this.checked) {
            extrabed =" Extra bed Included";
            extrabedcost +=8000.00 ;
       } else {
            extrabedcost-=8000.00 ;
           }
        


    }

    
}
extrachange()


function ChangeDivingGuide(){

    if(this.value =="adult"){
        if(this.checked) {
            adultguide =" A guide booked for adults"
            adultguidecost +=1000.00 ;
    } else {
        adultguidecost-=1000.00 ;
        }
    } 
    else if(this.value =="kid"){
        if(this.checked) {
            kidsguide =" A guide booked for kids"
            kidsguidecost +=500.00 ;
    } else {
        kidsguidecost-=500.00 ;
        }
    }
    
}

function addAdventure(){

    noofadult = AdvAdultInput.value;
    noofkids = AdvChildInput.value;
    nationality = nationalityinput.value;
    advbookingname = Adventurename.value;

    if (nationality.toLowerCase() == "sri lankan"){
        divingadultcost = 5000;
        divingkidscost = 2000;
    }else {
        divingadultcost = 10000;
        divingkidscost= 5000;
    }

    adventurecost = noofadult*divingadultcost + noofkids*divingkidscost + adultguidecost + kidsguidecost
    Advdetails.innerText = `Hii ${advbookingname}
    Thank you for booking diving Adventure!!
    Booking details :-
    No. of Adults = ${noofadult}
    No. of kids = ${noofkids}
    Cost per Adult = LKR ${divingadultcost}/-
    Cost per Child = LKR ${divingkidscost}/-
    Total Adventure booking cost = LKR ${adventurecost}/-`
    

}

function Loyaltypoints(){
    singlerooms = parseInt(SRInput.value);
    doublerooms = parseInt(DRInput.value);
    triplerooms = parseInt(TRInput.value);

    noofrooms = singlerooms + doublerooms + triplerooms

    if(noofrooms >3){
        LoyaltyPoints += 20* noofrooms;

    }

    localStorage.setItem("LoyaltyPoints", `${LoyaltyPoints}`);

    output3text.innerText = `You have received ${LoyaltyPoints} loyalty points`



}

function addToFaviourites(){
    
    localStorage.setItem("bookname", `${bookname}`);
    localStorage.setItem("branchselectionname" , `${branchselectionname}`);
    localStorage.setItem("noofrooms", `${noofrooms}`);
    localStorage.setItem("advbookingname", `${advbookingname}`);
    localStorage.setItem("nationality", `${nationality}`);
    localStorage.setItem("noofadult", `${noofadult}`);
    localStorage.setItem("noofkids", `${noofkids}`);
    localStorage.setItem("noofdays", `${noofdays}`);
    localStorage.setItem("child5", `${child5}`);
    localStorage.setItem("promoinput", `${promoinput}`);
    localStorage.setItem("extrabed", `${extrabed}`);
    localStorage.setItem("adultguide", `${adultguide}`);
    localStorage.setItem("kidsguide", `${kidsguide}`);
    localStorage.setItem("finalcost", `${finalcost}`);
    localStorage.setItem("finalpayment", `${finalpayment}`);
    localStorage.setItem("LoyaltyPoints", `${LoyaltyPoints}`);
    localStorage.setItem("adventurecost", `${adventurecost}`);
    localStorage.setItem("divingadultcost", `${divingadultcost}`);
    localStorage.setItem("singlerooms", `${singlerooms}`);
    localStorage.setItem("doublerooms", `${doublerooms}`);
    localStorage.setItem("triplerooms", `${triplerooms}`);
    




}


function OverallBookBtn(){

    EmailDetails =emaildetails.value;
    singlerooms = parseInt(SRInput.value);
    doublerooms = parseInt(DRInput.value);
    triplerooms = parseInt(TRInput.value);
    child5 = parseInt(ChildInput.value);
    noofdays = parseInt(DaysInput.value);
    roombookadults = roombookingadults.value
    noofrooms = singlerooms + doublerooms + triplerooms
    bookname = roombookingname.value;
    branchselectionname = brachselect.value;
    var loyaltyPoints = localStorage.getItem("LoyaltyPoints");

    costsingleroom = singlerooms*25000;
    costdoubleroom = doublerooms*35000;
    costtripleroom = triplerooms*40000;
    roomtotal = costsingleroom + costdoubleroom + costtripleroom
    childcost = child5 * 5000;

    finalroomtotal = noofdays*roomtotal
    
    finalcost = noofdays*(roomtotal + childcost + extrabedcost)


    

    overallpopusdetailsoutput.innerHTML=`
    <h2>Order Placed</h2>
    <h3>Hii,  ${bookname}</h3>
    <p>
        Your order details are as Follows : <br>
        Selected branch is ${branchselectionname}<br>
        Selected Room Type is<br>
        Single rooms : ${singlerooms} rooms
        Double rooms : ${doublerooms} rooms
        Triple rooms : ${triplerooms} rooms<br>
        With ${extrabed} 
        Entered Number of Rooms ${noofrooms} <br>
        Cost for rooms is LKR ${finalroomtotal} <br>
        Entered Number of Adults  ${roombookadults} <br>
        Entered Number of Children (Above 5 years old) is ${child5}<br>
        The aditiobal Meal Cost for kids above 5 is LKR ${childcost}<br>

    
        Final Cost (Without Promotion Discounts) LKR ${finalcost}<br>
        Final Cost (With Promotion if there any) LKR ${finalpayment} <br>

        Contact Details :<br>
        Email address : ${EmailDetails}<br>



        
    `
    emaildetails.value="";
    SRInput.value=0;
    DRInput.value=0;
    TRInput.value=0;
    ChildInput.value=0;
    DaysInput.value-0;
    roombookingadults.value=1;
    OutputText1.innerText = "zero current bookings";
    CostForNow.innerText = "0LKR";
    output3text.innerText="";
    output5Txt.innerText="";
    output7Txt.innerText="";
    ExtraRqInput.checked=false;


    AdvAdultInput.value=0;
    AdvChildInput.value=0;
    nationalityinput.value="sri lankan";
    Adventurename.value="";
    Advdetails.innerText="No bookings still";
    DivingGuide.checked=false;












    
}





initialize();






























