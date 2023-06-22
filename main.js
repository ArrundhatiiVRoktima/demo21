$(function(){

    $(".toggle").on("click", function(){

        if($(".item").hasClass("active")){
            $(".item").removeClass("active");
        }
        else{
            $(".item").addClass("active");
        }
    });
});   

function submit(){

    document.getElementById("sun_text").textContent = "-";
    document.getElementById("moon_text").textContent = "-";
    document.getElementById("jupiter_text").textContent = "-";
    document.getElementById("rahu_text").textContent = "-";
    document.getElementById("mercury_text").textContent = "-";
    document.getElementById("venus_text").textContent = "-";
    document.getElementById("ketu_text").textContent = "-";
    document.getElementById("saturn_text").textContent = "-";
    document.getElementById("mars_text").textContent = "-";

    var first_name_input = document.getElementById("first_name_input").value;
    var last_name_input = document.getElementById("last_name_input").value;
    var gender = document.getElementById("gender_input").value;
    var full_dob = document.getElementById("dob_input").value;
    
    if (first_name_input == "" || gender == "" || full_dob=="") {
        alert("Please fill out all the input fields!");
    }
    else {
        console.log("Loading") 

        var result_box = document.getElementById("result_box");
    
        if (result_box.style.display = "none") {
            result_box.style.display = "block";
            console.log("Result box visible")
        }

        var dob_components = full_dob.split("-");
        var date = dob_components[2];
        var month = dob_components[1];
        var year = dob_components[0];
        console.log(date);
        console.log(month);
        console.log(year);
        
        //Psychic Number

        let date_1 = String(date).charAt(0);
        let date_2 = String(date).charAt(1);
        date_1_no = parseInt(date_1);
        date_2_no = parseInt(date_2);
        let p = date_1_no + date_2_no;
        console.log("p = " + p);
        if (p.toString().length > 1){
            let p_1 = String(p).charAt(0);
            let p_2 = String(p).charAt(1);
            p_1_no = parseInt(p_1);
            p_2_no = parseInt(p_2)
            let psychic_number = p_1_no + p_2_no;
            console.log("Psychic No. : " + psychic_number);
            document.getElementById("psychic_number").innerHTML = "Psychic No. : " + psychic_number;
        }
        else{
            psychic_number = p;
            console.log("Psychic No. : " + psychic_number);
            document.getElementById("psychic_number").innerHTML = "Psychic No. : " + psychic_number;
        }
        

        if (date_1_no == 0 || date == 10 || date == 20 || date == 30){
            console.log("Psychic No. will not be printed.")
            var printed = "no"
        }

        else {
            console.log("Psychic No. will be printed.")
            var printed = "yes"
        }

        //Destiny Number

        let month_1 = String(month).charAt(0);
        let month_2 = String(month).charAt(1);
        month_1_no = parseInt(month_1);
        month_2_no = parseInt(month_2);  
        
        let year_1 = String(year).charAt(0);
        let year_2 = String(year).charAt(1);
        let year_3 = String(year).charAt(2);
        let year_4 = String(year).charAt(3);
        year_1_no = parseInt(year_1);
        year_2_no = parseInt(year_2);
        year_3_no = parseInt(year_3);
        year_4_no = parseInt(year_4);

        let d = date_1_no + date_2_no + month_1_no + month_2_no + year_1_no + year_2_no + year_3_no + year_4_no;
        console.log("d = " + d);

        if (d.toString().length > 1){
            let d_1 = String(d).charAt(0);
            let d_2 = String(d).charAt(1);
            d_1_no = parseInt(d_1);
            d_2_no = parseInt(d_2);
            d2 = d_1_no + d_2_no;
            console.log("d2 = " + d2);
            if (d2.toString().length > 1){
                let d2_1 = String(d2).charAt(0);
                let d2_2 = String(d2).charAt(1);
                d2_1_no = parseInt(d2_1);
                d2_2_no = parseInt(d2_2);
                var destiny_number = d2_1_no + d2_2_no;
                console.log("Destiny No. : " + destiny_number);
                console.log("Destiny No. will be printed.");
                document.getElementById("destiny_number").innerHTML = "Destiny No. : " + destiny_number;
            }
    
            else{
                destiny_number = d2;
                console.log("Destiny No. : " + destiny_number);
                console.log("Destiny No. will be printed.");
                document.getElementById("destiny_number").innerHTML = "Destiny No. : " + destiny_number;
            }
        }
        else{
            destiny_number = d;
            console.log("Destiny No. : " + destiny_number);
            console.log("Destiny No. will be printed.");
            document.getElementById("destiny_number").innerHTML = "Destiny No. : " + destiny_number;
        }


        //Kua Number

        ky = year_1_no + year_2_no + year_3_no + year_4_no;
        kyn = parseInt(ky);
        console.log("ky = " + kyn)
        if (kyn.toString().length > 1){
            let ky_1 = String(kyn).charAt(0);
            let ky_2 = String(kyn).charAt(1);
            kyn_1 = parseInt(ky_1);
            kyn_2 = parseInt(ky_2);
            ky2 = kyn_1 + kyn_2;
            console.log("ky2 = " + ky2);
            if (ky2.toString().length > 1){
                let ky2_1 = String(ky2).charAt(0);
                let ky2_2 = String(ky2).charAt(1);
                kyn2_1 = parseInt(ky2_1);
                kyn2_2 = parseInt(ky2_2);
                let year_total = kyn2_1 + kyn2_2;
                console.log("Year Total : " + year_total);
            }
    
            else{
                year_total = ky2;
                console.log("Year Total : " + year_total);
            }
        }

        else{
            year_total = kyn;
            console.log("Year Total : " + year_total);
        }

        if(gender == "male"){
            k_number = 11 - year_total;

            if (k_number.toString().length > 1){
                let k_1 = String(k_number).charAt(0);
                let k_2 = String(k_number).charAt(1);
                k_1_no = parseInt(k_1);
                k_2_no = parseInt(k_2)
                var kua_number = k_1_no + k_2_no;
                console.log("Kua No. : " + kua_number);
                console.log("Kua No. will be printed.");
                document.getElementById("kua_number").innerHTML = "Kua No. : " + kua_number;
            }
            else{
                kua_number = k_number;
                console.log("Kua No. : " + kua_number);
                console.log("Kua No. will be printed.");
                document.getElementById("kua_number").innerHTML = "Kua No. : " + kua_number;
            }
            

        }
        else if(gender == "female"){
            k_number = year_total + 4;

            if (k_number.toString().length > 1){
                let k_1 = String(k_number).charAt(0);
                let k_2 = String(k_number).charAt(1);
                k_1_no = parseInt(k_1);
                k_2_no = parseInt(k_2)
                var kua_number = k_1_no + k_2_no;
                console.log("Kua No. : " + kua_number);
                console.log("Kua No. will be printed.");
                document.getElementById("kua_number").innerHTML = "Kua No. : " + kua_number;
            }
            else{
                kua_number = k_number;
                console.log("Kua No. : " + kua_number);
                console.log("Kua No. will be printed.");
                document.getElementById("kua_number").innerHTML = "Kua No. : " + kua_number;
            }
        }

        //loshu grid length settlement

        sun = document.getElementById("sun_text");
        moon = document.getElementById("moon_text");
        jupiter = document.getElementById("jupiter_text");
        rahu = document.getElementById("rahu_text");
        mercury = document.getElementById("mercury_text");
        venus = document.getElementById("venus_text");
        ketu = document.getElementById("ketu_text");
        saturn = document.getElementById("saturn_text");
        mars = document.getElementById("mars_text");
            
        //date_1_no

        if (date_1_no == "1"){
            document.getElementById("sun_text").textContent = "1";
        }
        else if (date_1_no == "2"){
            document.getElementById("moon_text").textContent = "2";
        }
        else if (date_1_no == "3"){
            document.getElementById("jupiter_text").textContent = "3";
        }
        else if (date_1_no == "4"){
            document.getElementById("rahu_text").textContent = "4";
        }
        else if (date_1_no == "5"){
            document.getElementById("mercury_text").textContent = "5";
        }
        else if (date_1_no == "6"){
            document.getElementById("venus_text").textContent = "6";
        }
        else if (date_1_no == "7"){
            document.getElementById("ketu_text").textContent = "7";
        }
        else if (date_1_no == "8"){
            document.getElementById("saturn_text").textContent = "8";
        }
        else if (date_1_no == "9"){
            document.getElementById("mars_text").textContent = "9";
        }

        //date_2_no

        if (date_2_no == "1"){
                if(date_1_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if (date_2_no == "2"){
                if(date_1_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if (date_2_no == "3"){
                if(date_1_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if (date_2_no == "4"){
                if(date_1_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if (date_2_no == "5"){
                if(date_1_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if (date_2_no == "6"){
                if(date_1_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if (date_2_no == "7"){
                if(date_1_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if (date_2_no == "8"){
                if(date_1_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if (date_2_no == "9"){
                if(date_1_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        //month_1_no

        if (month_1_no == "1"){
                if(date_1_no == "1" || date_2_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if (month_1_no == "2"){
                if(date_1_no == "2" || date_2_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if (month_1_no == "3"){
                if(date_1_no == "3" || date_2_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if (month_1_no == "4"){
                if(date_1_no == "4" || date_2_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if (month_1_no == "5"){
                if(date_1_no == "5" || date_2_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if (month_1_no == "6"){
                if(date_1_no == "6" || date_2_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if (month_1_no == "7"){
                if(date_1_no == "7" || date_2_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if (month_1_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if (month_1_no == "9"){
                if(date_1_no == "9" || date_2_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        //month_2_no

        if (month_2_no == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if (month_2_no == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if (month_2_no == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if (month_2_no == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if (month_2_no == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if (month_2_no == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if (month_2_no == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if (month_2_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if (month_2_no == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        //year_1_no

        if (year_1_no == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if (year_1_no == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if (year_1_no == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if (year_1_no == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if (year_1_no == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if (year_1_no == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if (year_1_no == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if (year_1_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if (year_1_no == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        //year_2_no

        if (year_2_no == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if (year_2_no == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if (year_2_no == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if (year_2_no == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if (year_2_no == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if (year_2_no == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if (year_2_no == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
            }
        if (year_2_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if (year_2_no == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        //year_3_no

        if (year_3_no == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1" || year_2_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if (year_3_no == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"|| year_2_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if (year_3_no == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"|| year_2_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if (year_3_no == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4" || year_2_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if (year_3_no == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5" || year_2_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if (year_3_no == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6" || year_2_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if (year_3_no == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"|| year_2_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if (year_3_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8" || year_2_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if (year_3_no == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9" || year_2_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }
            
        //year_4_no

        if (year_4_no == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1" || year_2_no == "1" || year_3_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if (year_4_no == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"|| year_2_no == "2" || year_3_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if (year_4_no == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"|| year_2_no == "3" || year_3_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if (year_4_no == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4" || year_2_no == "4" || year_3_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if (year_4_no == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5" || year_2_no == "5" || year_3_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if (year_4_no == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6" || year_2_no == "6" || year_3_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if (year_4_no == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"|| year_2_no == "7" || year_3_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if (year_4_no == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8" || year_2_no == "8" || year_3_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if (year_4_no == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9" || year_2_no == "9" || year_3_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        //driver no

        if(printed == "yes" && psychic_number == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1" || year_2_no == "1" || year_3_no == "1" || year_4_no == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if(printed == "yes" && psychic_number == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"|| year_2_no == "2" || year_3_no == "2" || year_4_no == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if(printed == "yes" && psychic_number == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"|| year_2_no == "3" || year_3_no == "3" || year_4_no == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if(printed == "yes" && psychic_number == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4" || year_2_no == "4" || year_3_no == "4" || year_4_no == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if(printed == "yes" && psychic_number == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5" || year_2_no == "5" || year_3_no == "5" || year_4_no == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if(printed == "yes" && psychic_number == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6" || year_2_no == "6" || year_3_no == "6" || year_4_no == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if(printed == "yes" && psychic_number == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"|| year_2_no == "7" || year_3_no == "7" || year_4_no == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if(printed == "yes" && psychic_number == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8" || year_2_no == "8" || year_3_no == "8" || year_4_no == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if(printed == "yes" && psychic_number == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9" || year_2_no == "9" || year_3_no == "9" || year_4_no == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        //conductor number

        if(destiny_number == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1"|| year_2_no == "1" || year_3_no == "1" || year_4_no == "1" || (psychic_number=="1" && printed == "yes")){
                    sun.textContent += "1";
                }
                else{
                    sun.textContent = "1";
                }
        }
        if(destiny_number == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"|| year_2_no == "2" || year_3_no == "2" || year_4_no == "2" || (psychic_number=="2" && printed == "yes")){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if(destiny_number == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"|| year_2_no == "3" || year_3_no == "3" || year_4_no == "3" || (psychic_number=="3" && printed == "yes")){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if(destiny_number == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4" || year_2_no == "4" || year_3_no == "4" || year_4_no == "4" || (psychic_number=="4" && printed == "yes")){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if(destiny_number == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5" || year_2_no == "5" || year_3_no == "5" || year_4_no == "5" || (psychic_number=="5" && printed == "yes")){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if(destiny_number == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6" || year_2_no == "6" || year_3_no == "6" || year_4_no == "6" || (psychic_number=="6" && printed == "yes")){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if(destiny_number == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"|| year_2_no == "7" || year_3_no == "7" || year_4_no == "7" || (psychic_number=="7" && printed == "yes")){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if(destiny_number == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8" || year_2_no == "8" || year_3_no == "8" || year_4_no == "8" || (psychic_number=="8" && printed == "yes")){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if(destiny_number == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9" || year_2_no == "9" || year_3_no == "9" || year_4_no == "9" || (psychic_number=="9" && printed == "yes")){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        //kua number

        if(kua_number == "1"){
                if(date_1_no == "1" || date_2_no == "1" || month_1_no == "1" || month_2_no == "1" || year_1_no == "1" || year_2_no == "1" || year_3_no == "1" || year_4_no == "1" || (psychic_number=="1" && printed == "yes") || destiny_number == "1"){
                    document.getElementById("sun_text").textContent += "1";
                }
                else{
                    document.getElementById("sun_text").textContent = "1";
                }
        }
        if(kua_number == "2"){
                if(date_1_no == "2" || date_2_no == "2" || month_1_no == "2" || month_2_no == "2" || year_1_no == "2"|| year_2_no == "2" || year_3_no == "2" || year_4_no == "2" || (psychic_number=="2" && printed == "yes") || destiny_number == "2"){
                    document.getElementById("moon_text").textContent += "2";
                }
                else{
                    document.getElementById("moon_text").textContent = "2";
                }
        }
        if(kua_number == "3"){
                if(date_1_no == "3" || date_2_no == "3" || month_1_no == "3" || month_2_no == "3" || year_1_no == "3"|| year_2_no == "3" || year_3_no == "3" || year_4_no == "3" || (psychic_number=="3" && printed == "yes") || destiny_number == "3"){
                    document.getElementById("jupiter_text").textContent += "3";
                }
                else{
                    document.getElementById("jupiter_text").textContent = "3";
                }
        }
        if(kua_number == "4"){
                if(date_1_no == "4" || date_2_no == "4" || month_1_no == "4" || month_2_no == "4" || year_1_no == "4" || year_2_no == "4" || year_3_no == "4" || year_4_no == "4" || (psychic_number=="4" && printed == "yes") || destiny_number == "4"){
                    document.getElementById("rahu_text").textContent += "4";
                }
                else{
                    document.getElementById("rahu_text").textContent = "4";
                }
        }
        if(kua_number == "5"){
                if(date_1_no == "5" || date_2_no == "5" || month_1_no == "5" || month_2_no == "5"|| year_1_no == "5" || year_2_no == "5" || year_3_no == "5" || year_4_no == "5" || (psychic_number=="5" && printed == "yes") || destiny_number == "5"){
                    document.getElementById("mercury_text").textContent += "5";
                }
                else{
                    document.getElementById("mercury_text").textContent = "5";
                }
        }
        if(kua_number == "6"){
                if(date_1_no == "6" || date_2_no == "6" || month_1_no == "6" || month_2_no == "6" || year_1_no == "6" || year_2_no == "6" || year_3_no == "6" || year_4_no == "6" || (psychic_number=="6" && printed == "yes") || destiny_number == "6"){
                    document.getElementById("venus_text").textContent += "6";
                }
                else{
                    document.getElementById("venus_text").textContent = "6";
                }
        }
        if(kua_number == "7"){
                if(date_1_no == "7" || date_2_no == "7" || month_1_no == "7" || month_2_no == "7" || year_1_no == "7"|| year_2_no == "7" || year_3_no == "7" || year_4_no == "7" || (psychic_number=="7" && printed == "yes") || destiny_number == "7"){
                    document.getElementById("ketu_text").textContent += "7";
                }
                else{
                    document.getElementById("ketu_text").textContent = "7";
                }
        }
        if(kua_number == "8"){
                if(date_1_no == "8" || date_2_no == "8"|| month_1_no == "8" || month_2_no == "8" || year_1_no == "8" || year_2_no == "8" || year_3_no == "8" || year_4_no == "8" || (psychic_number=="8" && printed == "yes") || destiny_number == "8"){
                    document.getElementById("saturn_text").textContent += "8";
                }
                else{
                    document.getElementById("saturn_text").textContent = "8";
                }
        }
        if(kua_number == "9"){
                if(date_1_no == "9" || date_2_no == "9" || month_1_no == "9" || month_2_no == "9" || year_1_no == "9" || year_2_no == "9" || year_3_no == "9" || year_4_no == "9" || (psychic_number=="9" && printed == "yes") || destiny_number == "9"){
                    document.getElementById("mars_text").textContent += "9";
                }
                else{
                    document.getElementById("mars_text").textContent = "9";
                }
        }

        // dc combination

        if(psychic_number == "1" && destiny_number == "1"){
            document.getElementById("pd_combination_description").textContent = "You have a very good combination of Psychic number and Destiny number. You are a born leader. Your ego is a little high. You are a self sufficient person you do not need any sort of support-system in life. In conslusion, you have a royal and king-like attitude, and you want to be the only boss in life."
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"
        }
        if(psychic_number == "1" && destiny_number == "2"){
            document.getElementById("pd_combination_description").textContent = "You have a very good combination of Psychic number and Destiny number. You are a born leader. Your ego is a little high but you do not show it to others. You sound very cool and calm. You have an attractive personality. You have a flickering mind set, it means your mind changes and fluctuates frequently. You are sensitive in nature as well."
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 8, 9"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"
        }
        if(psychic_number == "1" && destiny_number == "3"){
            document.getElementById("pd_combination_description").textContent = "You have a very good combination of Psychic number and Destiny number. You are a born leader. You are always curious for knowledge. You have good creativity and imagination. Sometimes your ego is a little high as you are very knowledgeable but by heart and nature you are emotional."
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5"
            document.getElementById("bad_no").textContent = "Bad No. : 6, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, White"
        }
        if(psychic_number == "1" && destiny_number == "4"){
            document.getElementById("pd_combination_description").textContent = "You have a good combination of Psychic number and Destiny number. You are a born leader. Your ego is a little high. You are a self-sufficient person and you do not need any sort of support-system in life. You are very logical and organized. By nature you are very rebellious and argumentative. It can be said, you are very stubborn in nature."
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"
        }
        if(psychic_number == "1" && destiny_number == "5"){
            document.getElementById("pd_combination_description").textContent = "You have a very good combination of Psychic number and Destiny number. You are a born leader. Your ego is a little high. Your communication skills are good. You are popular in your friend-circle. It can be said, you are a good entertainer. You can be a little lazy sometimes. You are always young at heart."
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"
        }
        if(psychic_number == "1" && destiny_number == "6"){
            document.getElementById("pd_combination_description").textContent = "You have a very good combination of Psychic number and Destiny number. You are a born leader. You have a very powerful aura. You are very sweet-spoken and romantic . You are manipulative in nature but supportive too at times. You are always surrounded by name, fame and money. You can lie very easily. You are tempted towards luxury all the time."
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 3, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black, Yellow"
        }
        if(psychic_number == "1" && destiny_number == "7"){
            document.getElementById("pd_combination_description").textContent = "You have an average combination of Psychic number and Destiny number. If other numbers in your chart support you, then you succeed in life. You are creative. You have wisdom. You have art to solve any issue. Your imagination powers and intuition powers are very good. You are interested in spirituality. You are soft-spoken. You will have some kind of disappointment in life which can lead you towards depression. So you need to be careful for that."
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"
        }
        if(psychic_number == "1" && destiny_number == "8"){
            document.getElementById("pd_combination_description").textContent = "You have an anti combination of Psychic number and Destiny number. If other numbers in your chart support you, then it is good, otherwise, you lead an life full of ups and downs. You need to work very hard to achienve success. Most of the time, you would struggle in your life. You might have health issues or relationship issues as well."        
            document.getElementById("lucky_no").textContent = "Lucky No. : 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 1, 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Red, Black"
        }
        if(psychic_number == "1" && destiny_number == "9"){
            document.getElementById("pd_combination_description").textContent = "You have a very good combination of Psychic number and Destiny number. You are a born leader. Your ego is a little high. You are very strong mentally and physically, no one can win you by any force. You are like a soldier. You are compassionate in nature. Sometimes, you are short tempered too. You are driven by your mood only."
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 2, 4, 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "2" && destiny_number == "1"){
            document.getElementById("pd_combination_description").textContent = "P = 2 ; D = 1"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "2" && destiny_number == "2"){
            document.getElementById("pd_combination_description").textContent = "P = 2 ; D = 2"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"
    
        }
        if(psychic_number == "2" && destiny_number == "3"){
            document.getElementById("pd_combination_description").textContent = "P = 2 ; D = 3"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "2" && destiny_number == "4"){
            document.getElementById("pd_combination_description").textContent = "P = 2 ; D = 4"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "2" && destiny_number == "5"){
            document.getElementById("pd_combination_description").textContent = "P = 2 ; D = 5"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "2" && destiny_number == "6"){
            document.getElementById("pd_combination_description").textContent = "P = 2 ; D = 6"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "2" && destiny_number == "7"){
            document.getElementById("pd_combination_description").textContent = "P = 2 ; D = 7"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "2" && destiny_number == "8"){
            document.getElementById("pd_combination_description").textContent = "P = 2 ; D = 8"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "2" && destiny_number == "9"){
            document.getElementById("pd_combination_description").textContent = "P = 2 ; D = 9"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "3" && destiny_number == "1"){
            document.getElementById("pd_combination_description").textContent = "P = 3 ; D = 1"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "3" && destiny_number == "2"){
            document.getElementById("pd_combination_description").textContent = "P = 3 ; D = 2"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "3" && destiny_number == "3"){
            document.getElementById("pd_combination_description").textContent = "P = 3 ; D = 3"
            document.getElementById("lucky_no").textContent = "Lucky No. : 1, 3, 5, 6"
            document.getElementById("bad_no").textContent = "Bad No. : 8"
            document.getElementById("lucky_colour").textContent = "Lucky Colours : Red, Yellow, Green, White"
            document.getElementById("bad_colour").textContent = "Bad Colours : Black"

        }
        if(psychic_number == "3" && destiny_number == "4"){
                document.getElementById("pd_combination_description").textContent = "P = 3 ; D = 4"
        }
        if(psychic_number == "3" && destiny_number == "5"){
                document.getElementById("pd_combination_description").textContent = "P = 3 ; D = 5"
        }
        if(psychic_number == "3" && destiny_number == "6"){
                document.getElementById("pd_combination_description").textContent = "P = 3 ; D = 6"
        }
        if(psychic_number == "3" && destiny_number == "7"){
                document.getElementById("pd_combination_description").textContent = "P = 3 ; D = 7"
        }
        if(psychic_number == "3" && destiny_number == "8"){
                document.getElementById("pd_combination_description").textContent = "P = 3 ; D = 8"
        }
        if(psychic_number == "3" && destiny_number == "9"){
                document.getElementById("pd_combination_description").textContent = "P = 3 ; D = 9"
        }
        if(psychic_number == "4" && destiny_number == "1"){
                document.getElementById("pd_combination_description").textContent = "P = 4 ; D = 1"
        }
        if(psychic_number == "4" && destiny_number == "2"){
                document.getElementById("pd_combination_description").textContent = "P = 4 ; D = 2"
        }
        if(psychic_number == "4" && destiny_number == "3"){
                document.getElementById("pd_combination_description").textContent = "P = 4 ; D = 3"
        }
        if(psychic_number == "4" && destiny_number == "4"){
                document.getElementById("pd_combination_description").textContent = "P = 4 ; D = 4"
        }
        if(psychic_number == "4" && destiny_number == "5"){
                document.getElementById("pd_combination_description").textContent = "P = 4 ; D = 5"
        }
        if(psychic_number == "4" && destiny_number == "6"){
                document.getElementById("pd_combination_description").textContent = "P = 4 ; D = 6"
        }
        if(psychic_number == "4" && destiny_number == "7"){
                document.getElementById("pd_combination_description").textContent = "P = 4 ; D = 7"
        }
        if(psychic_number == "4" && destiny_number == "8"){
                document.getElementById("pd_combination_description").textContent = "P = 4 ; D = 8"
        }
        if(psychic_number == "4" && destiny_number == "9"){
                document.getElementById("pd_combination_description").textContent = "P = 4 ; D = 9"
        }
        if(psychic_number == "5" && destiny_number == "1"){
                document.getElementById("pd_combination_description").textContent = "P = 5 ; D = 1"
        }
        if(psychic_number == "5" && destiny_number == "2"){
                document.getElementById("pd_combination_description").textContent = "P = 5 ; D = 2"
        }
        if(psychic_number == "5" && destiny_number == "3"){
                document.getElementById("pd_combination_description").textContent = "P = 5 ; D = 3"
        }
        if(psychic_number == "5" && destiny_number == "4"){
                document.getElementById("pd_combination_description").textContent = "P = 5 ; D = 4"
        }
        if(psychic_number == "5" && destiny_number == "5"){
                document.getElementById("pd_combination_description").textContent = "P = 5 ; D = 5"
        }
        if(psychic_number == "5" && destiny_number == "6"){
                document.getElementById("pd_combination_description").textContent = "P = 5 ; D = 6"
        }
        if(psychic_number == "5" && destiny_number == "7"){
                document.getElementById("pd_combination_description").textContent = "P = 5 ; D = 7"
        }
        if(psychic_number == "5" && destiny_number == "8"){
                document.getElementById("pd_combination_description").textContent = "P = 5 ; D = 8"
        }
        if(psychic_number == "5" && destiny_number == "9"){
                document.getElementById("pd_combination_description").textContent = "P = 5 ; D = 9"
        }
        if(psychic_number == "6" && destiny_number == "1"){
                document.getElementById("pd_combination_description").textContent = "P = 6 ; D = 1"
        }
        if(psychic_number == "6" && destiny_number == "2"){
                document.getElementById("pd_combination_description").textContent = "P = 6 ; D = 2"
        }
        if(psychic_number == "6" && destiny_number == "3"){
                document.getElementById("pd_combination_description").textContent = "P = 6 ; D = 3"
        }
        if(psychic_number == "6" && destiny_number == "4"){
                document.getElementById("pd_combination_description").textContent = "P = 6 ; D = 4"
        }
        if(psychic_number == "6" && destiny_number == "5"){
                document.getElementById("pd_combination_description").textContent = "P = 6 ; D = 5"
        }
        if(psychic_number == "6" && destiny_number == "6"){
                document.getElementById("pd_combination_description").textContent = "P = 6 ; D = 6"
        }
        if(psychic_number == "6" && destiny_number == "7"){
                document.getElementById("pd_combination_description").textContent = "P = 6 ; D = 7"
        }
        if(psychic_number == "6" && destiny_number == "8"){
                document.getElementById("pd_combination_description").textContent = "P = 6 ; D = 8"
        }
        if(psychic_number == "6" && destiny_number == "9"){
                document.getElementById("pd_combination_description").textContent = "P = 6 ; D = 9"
        }
        if(psychic_number == "7" && destiny_number == "1"){
                document.getElementById("pd_combination_description").textContent = "P = 7 ; D = 1"
        }
        if(psychic_number == "7" && destiny_number == "2"){
                document.getElementById("pd_combination_description").textContent = "P = 7 ; D = 2"
        }
        if(psychic_number == "7" && destiny_number == "3"){
                document.getElementById("pd_combination_description").textContent = "P = 7 ; D = 3"
        }
        if(psychic_number == "7" && destiny_number == "4"){
                document.getElementById("pd_combination_description").textContent = "P = 7 ; D = 4"
        }
        if(psychic_number == "7" && destiny_number == "5"){
                document.getElementById("pd_combination_description").textContent = "P = 7 ; D = 5"
        }
        if(psychic_number == "7" && destiny_number == "6"){
                document.getElementById("pd_combination_description").textContent = "P = 7 ; D = 6"
        }
        if(psychic_number == "7" && destiny_number == "7"){
                document.getElementById("pd_combination_description").textContent = "P = 7 ; D = 7"
        }
        if(psychic_number == "7" && destiny_number == "8"){
                document.getElementById("pd_combination_description").textContent = "P = 7 ; D = 8"
        }
        if(psychic_number == "7" && destiny_number == "9"){
                document.getElementById("pd_combination_description").textContent = "P = 7 ; D = 9"
        }
        if(psychic_number == "8" && destiny_number == "1"){
                document.getElementById("pd_combination_description").textContent = "P = 8 ; D = 1"
        }
        if(psychic_number == "8" && destiny_number == "2"){
                document.getElementById("pd_combination_description").textContent = "P = 8 ; D = 2"
        }
        if(psychic_number == "8" && destiny_number == "3"){
                document.getElementById("pd_combination_description").textContent = "P = 8 ; D = 3"
        }
        if(psychic_number == "8" && destiny_number == "4"){
                document.getElementById("pd_combination_description").textContent = "P = 8; D = 4"
        }
        if(psychic_number == "8" && destiny_number == "5"){
                document.getElementById("pd_combination_description").textContent = "P = 8 ; D = 5"
        }
        if(psychic_number == "8" && destiny_number == "6"){
                document.getElementById("pd_combination_description").textContent = "P = 8 ; D = 6"
        }
        if(psychic_number == "8" && destiny_number == "7"){
            document.getElementById("pd_combination_description").textContent = "P = 8 ; D = 7"
        }
        if(psychic_number == "8" && destiny_number == "8"){
                document.getElementById("pd_combination_description").textContent = "P = 8 ; D = 8"
        }
        if(psychic_number == "8" && destiny_number == "9"){
                document.getElementById("pd_combination_description").textContent = "P = 8 ; D = 9"
        }
        if(psychic_number == "9" && destiny_number == "1"){
                document.getElementById("pd_combination_description").textContent = "P = 9 ; D = 1"
        }
        if(psychic_number == "9" && destiny_number == "2"){
                document.getElementById("pd_combination_description").textContent = "P = 9 ; D = 2"
        }
        if(psychic_number == "9" && destiny_number == "3"){
                document.getElementById("pd_combination_description").textContent = "P = 9 ; D = 3"
        }
        if(psychic_number == "9" && destiny_number == "4"){
                document.getElementById("pd_combination_description").textContent = "P = 9 ; D = 4"
        }
        if(psychic_number == "9" && destiny_number == "5"){
                document.getElementById("pd_combination_description").textContent = "P = 9 ; D = 5"
        }
        if(psychic_number == "9" && destiny_number == "6"){
                document.getElementById("pd_combination_description").textContent = "P = 9 ; D = 6"
        }
        if(psychic_number == "9" && destiny_number == "7"){
                document.getElementById("pd_combination_description").textContent = "P = 9 ; D = 7"
        }
        if(psychic_number == "9" && destiny_number == "8"){
                document.getElementById("pd_combination_description").textContent = "P = 9 ; D = 8"
        }
        if(psychic_number == "9" && destiny_number == "9"){
                document.getElementById("pd_combination_description").textContent = "P = 9 ; D = 9"
        }

        //name numerology

        // first name 

        first_name_length = first_name_input.length-1;
        console.log("First Name Length : " + first_name_length);
            
        previous_letter = 0
        current_letter = ""

        for (i = 0; i <= first_name_length; i++){
                current_letter = String(first_name_input).charAt(i);
                console.log("Current letter  : " + current_letter)

                if (current_letter == "a" || current_letter == "A"){
                    previous_letter = previous_letter + 1;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "b" || current_letter == "B"){
                    previous_letter = previous_letter + 2;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "c" || current_letter == "C"){
                    previous_letter = previous_letter + 3;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "d" || current_letter == "D"){
                    previous_letter = previous_letter + 4;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "e" || current_letter == "E"){
                    previous_letter = previous_letter + 5;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "f" || current_letter == "F"){
                    previous_letter = previous_letter + 8;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "g" || current_letter == "G"){
                    previous_letter = previous_letter + 3;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "h" || current_letter == "H"){
                    previous_letter = previous_letter + 5;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "i" || current_letter == "I"){
                    previous_letter = previous_letter + 1;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "j" || current_letter == "J"){
                    previous_letter = previous_letter + 1;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "k" || current_letter == "K"){
                    previous_letter = previous_letter + 2;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "l" || current_letter == "L"){
                    previous_letter = previous_letter + 3;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "m" || current_letter == "M"){
                    previous_letter = previous_letter + 4;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "n" || current_letter == "N"){
                    previous_letter = previous_letter + 5;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "o" || current_letter == "O"){
                    previous_letter = previous_letter + 7;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "p" || current_letter == "P"){
                    previous_letter = previous_letter + 8;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "q" || current_letter == "Q"){
                    previous_letter = previous_letter + 1;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "r" || current_letter == "R"){
                    previous_letter = previous_letter + 2;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "s" || current_letter == "S"){
                    previous_letter = previous_letter + 3;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "t" || current_letter == "T"){
                    previous_letter = previous_letter + 4;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "u" || current_letter == "U"){
                    previous_letter = previous_letter + 6;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "v" || current_letter == "V"){
                    previous_letter = previous_letter + 6;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "w" || current_letter == "W"){
                    previous_letter = previous_letter + 6;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "x" || current_letter == "X"){
                    previous_letter = previous_letter + 5;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "y" || current_letter == "Y"){
                    previous_letter = previous_letter + 1;
                    console.log("Previous Letter : " + previous_letter);
                }
                else if (current_letter == "z" || current_letter == "Z"){
                    previous_letter = previous_letter + 7;
                    console.log("Previous Letter : " + previous_letter);
                }
        }

        if (previous_letter.toString().length > 3){
                let pl4_1 = String(previous_letter).charAt(0);
                let pl4_2 = String(previous_letter).charAt(1);
                let pl4_3 = String(previous_letter).charAt(2);
                let pl4_4 = String(previous_letter).charAt(3);
                pl4_1_no = parseInt(pl4_1);
                pl4_2_no = parseInt(pl4_2);
                pl4_3_no = parseInt(pl4_3);
                pl4_4_no = parseInt(pl4_4);
                pl4 = pl4_1_no + pl4_2_no + pl4_3_no + pl4_4_no;
                
                if (pl4.toString().length > 1){
                    let pl42_1 = String(pl4).charAt(0);
                    let pl42_2 = String(pl4).charAt(1);
                    pl42_1_no = parseInt(pl42_1);
                    pl42_2_no = parseInt(pl42_2);
                    var first_name_total = pl42_1_no + pl42_2_no;
                    console.log("First Name No. : " + first_name_total);
                    document.getElementById("first_name_text").innerHTML = "First Name : " + first_name_total;
                }
                else if (pl4.toString().length = 1){
                    var first_name_total = pl4;
                    console.log("First Name No. : " + first_name_total);
                    document.getElementById("first_name_text").innerHTML = "First Name : " + first_name_total;
                }
    
        }

        else if (previous_letter.toString().length > 2){
                let pl3_1 = String(previous_letter).charAt(0);
                let pl3_2 = String(previous_letter).charAt(1);
                let pl3_3 = String(previous_letter).charAt(2);
                pl3_1_no = parseInt(pl3_1);
                pl3_2_no = parseInt(pl3_2);
                pl3_3_no = parseInt(pl3_3)
                pl3 = pl3_1_no + pl3_2_no + pl3_3;
                
                if (pl3.toString().length > 1){
                    let pl32_1 = String(pl3).charAt(0);
                    let pl32_2 = String(pl3).charAt(1);
                    pl32_1_no = parseInt(pl32_1);
                    pl32_2_no = parseInt(pl32_2);
                    var first_name_total = pl32_1_no + pl32_2_no;
                    console.log("First Name No. : " + first_name_total);
                    document.getElementById("first_name_text").innerHTML = "First Name : " + first_name_total;
                }
                else if (pl3.toString().length = 1){
                    var first_name_total = pl3;
                    console.log("First Name No. : " + first_name_total);
                    document.getElementById("first_name_text").innerHTML = "First Name : " + first_name_total;
                }
    
        }

        else if (previous_letter.toString().length > 1){
                let pl2_1 = String(previous_letter).charAt(0);
                let pl2_2 = String(previous_letter).charAt(1);
                pl2_1_no = parseInt(pl2_1);
                pl2_2_no = parseInt(pl2_2);
                pl2 = pl2_1_no + pl2_2_no;

                if (pl2.toString().length > 1){
                    let pl22_1 = String(pl2).charAt(0);
                    let pl22_2 = String(pl2).charAt(1);
                    pl22_1_no = parseInt(pl22_1);
                    pl22_2_no = parseInt(pl22_2);
                    var first_name_total = pl22_1_no + pl22_2_no;
                    console.log("First Name No. : " + first_name_total);
                    document.getElementById("first_name_text").innerHTML = "First Name : " + first_name_total;
                }
                else if (pl2.toString().length = 1){
                    var first_name_total = pl2;
                    console.log("First Name No. : " + first_name_total);
                    document.getElementById("first_name_text").innerHTML = "First Name : " + first_name_total;
                }
    
        }

        else if (previous_letter.toString().length = 1){
                
                var first_name_total = previous_letter;
                console.log("First Name No. : " + first_name_total);
                document.getElementById("first_name_text").innerHTML = "First Name : " + first_name_total;
                
    
        }
            

        // last name

        last_name_length = last_name_input.length - 1;
        console.log("Last Name Length : " + last_name_length);
            
        previous_letter_last_name = 0
        current_letter_last_name = ""

        for (i = 0; i <= last_name_length; i++){
                current_letter_last_name = String(last_name_input).charAt(i);
                console.log("Current letter Last Name  : " + current_letter_last_name)

                if (current_letter_last_name == "a" || current_letter_last_name == "A"){
                    previous_letter_last_name = previous_letter_last_name + 1;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "b" || current_letter_last_name == "B"){
                    previous_letter_last_name = previous_letter_last_name + 2;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "c" || current_letter_last_name == "C"){
                    previous_letter_last_name = previous_letter_last_name + 3;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "d" || current_letter_last_name == "D"){
                    previous_letter_last_name = previous_letter_last_name + 4;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "e" || current_letter_last_name == "E"){
                    previous_letter_last_name = previous_letter_last_name + 5;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "f" || current_letter_last_name == "F"){
                    previous_letter_last_name = previous_letter_last_name + 8;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "g" || current_letter_last_name == "G"){
                    previous_letter_last_name = previous_letter_last_name + 3;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "h" || current_letter_last_name == "H"){
                    previous_letter_last_name = previous_letter_last_name + 5;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "i" || current_letter_last_name == "I"){
                    previous_letter_last_name = previous_letter_last_name + 1;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "j" || current_letter_last_name == "J"){
                    previous_letter_last_name = previous_letter_last_name + 1;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "k" || current_letter_last_name == "K"){
                    previous_letter_last_name = previous_letter_last_name + 2;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "l" || current_letter_last_name == "L"){
                    previous_letter_last_name = previous_letter_last_name + 3;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "m" || current_letter_last_name == "M"){
                    previous_letter_last_name = previous_letter_last_name + 4;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "n" || current_letter_last_name == "N"){
                    previous_letter_last_name = previous_letter_last_name + 5;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "o" || current_letter_last_name == "O"){
                    previous_letter_last_name = previous_letter_last_name + 7;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "p" || current_letter_last_name == "P"){
                    previous_letter_last_name = previous_letter_last_name + 8;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "q" || current_letter_last_name == "Q"){
                    previous_letter_last_name = previous_letter_last_name + 1;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "r" || current_letter_last_name == "R"){
                    previous_letter_last_name = previous_letter_last_name + 2;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "s" || current_letter_last_name == "S"){
                    previous_letter_last_name = previous_letter_last_name + 3;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "t" || current_letter_last_name == "T"){
                    previous_letter_last_name = previous_letter_last_name + 4;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "u" || current_letter_last_name == "U"){
                    previous_letter_last_name = previous_letter_last_name + 6;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "v" || current_letter_last_name == "V"){
                    previous_letter_last_name = previous_letter_last_name + 6;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "w" || current_letter_last_name == "W"){
                    previous_letter_last_name = previous_letter_last_name + 6;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "x" || current_letter_last_name == "X"){
                    previous_letter_last_name = previous_letter_last_name + 5;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "y" || current_letter_last_name == "Y"){
                    previous_letter_last_name = previous_letter_last_name + 1;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
                else if (current_letter_last_name == "z" || current_letter_last_name == "Z"){
                    previous_letter_last_name = previous_letter_last_name + 7;
                    console.log("Previous Letter_last_name : " + previous_letter_last_name);
                }
        }

        if (previous_letter_last_name.toString().length > 3){
                let pl4_1ln = String(previous_letter_last_name).charAt(0);
                let pl4_2ln = String(previous_letter_last_name).charAt(1);
                let pl4_3ln = String(previous_letter_last_name).charAt(2);
                let pl4_4ln = String(previous_letter_last_name).charAt(3);
                pl4_1_noln = parseInt(pl4_1ln);
                pl4_2_noln = parseInt(pl4_2ln);
                pl4_3_noln = parseInt(pl4_3ln);
                pl4_4_noln = parseInt(pl4_4ln);
                pl4ln = pl4_1_noln + pl4_2_noln + pl4_3_noln + pl4_4_noln;
                
                if (pl4ln.toString().length > 1){
                    let pl42_1ln = String(pl4ln).charAt(0);
                    let pl42_2ln = String(pl4ln).charAt(1);
                    pl42_1_noln = parseInt(pl42_1ln);
                    pl42_2_noln = parseInt(pl42_2ln);
                    var last_name_total = pl42_1_noln + pl42_2_noln;
                    console.log("Last Name No. : " + last_name_total);
                }
                else if (pl4ln.toString().length = 1){
                    var last_name_total = pl4ln;
                    console.log("Last Name No. : " + last_name_total);
                }
    
        }

        else if (previous_letter_last_name.toString().length > 2){
                let pl3_1ln = String(previous_letter_last_name).charAt(0);
                let pl3_2ln = String(previous_letter_last_name).charAt(1);
                let pl3_3ln = String(previous_letter_last_name).charAt(2);
                pl3_1_noln = parseInt(pl3_1ln);
                pl3_2_noln = parseInt(pl3_2ln);
                pl3_3_noln = parseInt(pl3_3ln)
                pl3ln = pl3_1_noln + pl3_2_noln + pl3_3ln;
    
                if (pl3ln.toString().length > 1){
                    let pl32_1ln = String(pl3ln).charAt(0);
                    let pl32_2ln = String(pl3ln).charAt(1);
                    pl32_1_noln = parseInt(pl32_1ln);
                    pl32_2_noln = parseInt(pl32_2ln);
                    var last_name_total = pl32_1_noln + pl32_2_noln;
                    console.log("Last Name No. : " + last_name_total);
                }
                else if (pl3.toString().length = 1){
                    var first_name_total = pl3;
                    console.log("Last Name No. : " + last_name_total);
                    }
    
        }

        else if (previous_letter_last_name.toString().length > 1){
            let pl2_1ln = String(previous_letter_last_name).charAt(0);
            let pl2_2ln = String(previous_letter_last_name).charAt(1);
            pl2_1_noln = parseInt(pl2_1ln);
            pl2_2_noln = parseInt(pl2_2ln);
            pl2ln = pl2_1_noln + pl2_2_noln;

            if (pl2ln.toString().length > 1){
                let pl22_1ln = String(pl2ln).charAt(0);
                let pl22_2ln = String(pl2ln).charAt(1);
                pl22_1_noln = parseInt(pl22_1ln);
                pl22_2_noln = parseInt(pl22_2ln);
                var last_name_total = pl22_1_noln + pl22_2_noln;
                console.log("Last Name No. : " + last_name_total);
            }
            else if (pl2ln.toString().length = 1){
                var last_name_total = pl2ln;
                console.log("Last Name No. : " + last_name_total);
            }
        }

        else if (previous_letter_last_name.toString().length = 1){
                
                var last_name_total = previous_letter_last_name;
                console.log("Last Name No. : " + last_name_total);
        }

        //full name

        full_name = first_name_total + last_name_total;
        
        if (full_name.toString().length > 1){
            let fn1 = String(full_name).charAt(0);
            let fn2 = String(full_name).charAt(1);
            fn1_no = parseInt(fn1);
            fn2_no = parseInt(fn2);
            var full_name_total = fn1_no + fn2_no;
            console.log("Full Name : " + full_name_total);
            document.getElementById("full_name_text").innerHTML = "Full Name : " + full_name_total;
        }
        else {
            var full_name_total = full_name;
            document.getElementById("full_name_text").innerHTML = "Full Name : " + full_name_total;
        }
            
        alert("Your form has been submitted.\nPlease scroll down.");


    }
} 



