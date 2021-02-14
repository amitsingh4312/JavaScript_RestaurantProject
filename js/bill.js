window.onload = function(){  
    var $ = function(id){
        return document.getElementById(id);
    }

    var aRotia = 0;
    var aParanthaa = 0;
    var aNaana = 0;
    var aEffCurrya = 0;
    var aVegCurrya = 0;
    var aShahiPaneera = 0;
    var aChickenCurrya = 0;
    var aSproutsa = 0;
    var aFruitSalada = 0;
    var aVegSalada = 0;
    var aIceCreama = 0;
    var aGulaabJamuna = 0;
    var aRasMalaia = 0;
    var aExtraa = 0;
    var aTotalAmount = 0;


    $("aRoti").onchange = function(){           //disables the input if the checkbox is unchecked and vice versa, and initialises values to 0
        $("aRoti1").disabled = !this.checked;
        $("aRoti1").value = 0;
        $("aRoti2").value = 0;
    }
    $("aRoti1").onchange = function(){      //validtaes the inputs, calculates, stores and displays in input field
            $("aRoti2").value = eval($("aRoti1").value * $("aRoti").value).toFixed(2);
            if($("aRoti2").value<0){
                alert("Number of Rotis cannot be negative.");
                location.reload();
            }else{aRotia = parseFloat($("aRoti2").value);}
    }
    $("aParantha").onchange = function(){           //disables the input if the checkbox is unchecked and vice versa, and initialises values to 0
        $("aParantha1").disabled = !this.checked;
        $("aParantha1").value = 0;
        $("aParantha2").value = 0;
    }
    $("aParantha1").onchange = function(){      //validtaes the inputs, calculates, stores and displays in input field
            $("aParantha2").value = eval($("aParantha1").value * $("aParantha").value).toFixed(2);
            if($("aParantha2").value<0){
                alert("Number of Rotis cannot be negative.");
                location.reload();
            }else{aParanthaa = parseFloat($("aParantha2").value);}
    }
    $("aNaan").onchange = function(){                   //disables the input if the checkbox is unchecked and vice versa, and initialises values to 0
        $("aNaan1").disabled = !this.checked;
        $("aNaan1").value = 0;
        $("aNaan2").value = 0;
    }
    $("aNaan1").onchange = function(){      //validtaes the inputs, calculates, stores and displays in input field
            $("aNaan2").value = eval($("aNaan1").value * $("aNaan").value).toFixed(2);
            if($("aNaan2").value<0){
                alert("Number of Rotis cannot be negative.");
                location.reload();
            }else{aNaana = parseFloat($("aNaan2").value);}
        } 
    $("aEggCurry").onchange = function(){                   //disables the input if the checkbox is unchecked and vice versa, and initialises values to 0
        $("aEggCurry1").disabled = !this.checked;
        $("aEggCurry1").value = 0;
        $("aEggCurry2").value = 0;
    }
    $("aEggCurry1").onchange = function(){      //validtaes the inputs, calculates, stores and displays in input field
            $("aEggCurry2").value = eval($("aEggCurry1").value * $("aEggCurry").value).toFixed(2);
            if($("aEggCurry2").value<0){
                alert("Number of Rotis cannot be negative.");
                location.reload();
            }else{aEffCurrya = parseFloat($("aEggCurry2").value);}
        }

    $("aVegCurry").onchange = function(){                   //disables the input if the checkbox is unchecked and vice versa, and initialises values to 0
        $("aVegCurry1").disabled = !this.checked;
        $("aVegCurry1").value = 0;
        $("aVegCurry2").value = 0;
    }
    $("aVegCurry1").onchange = function(){      //validtaes the inputs, calculates, stores and displays in input field
            $("aVegCurry2").value = eval($("aVegCurry1").value * $("aVegCurry").value).toFixed(2);
            if($("aVegCurry2").value<0){
                alert("Number of Rotis cannot be negative.");
                location.reload();
            }else{aVegCurrya = parseFloat($("aVegCurry2").value);}
        } 
                
    $("aShahiPaneer").onchange = function(){                   //disables the input if the checkbox is unchecked and vice versa, and initialises values to 0
        $("aShahiPaneer1").disabled = !this.checked;
        $("aShahiPaneer1").value = 0;
        $("aShahiPaneer2").value = 0;
    }
    $("aShahiPaneer1").onchange = function(){      //validtaes the inputs, calculates, stores and displays in input field
            $("aShahiPaneer2").value = eval($("aShahiPaneer1").value * $("aShahiPaneer").value).toFixed(2);
            if($("aShahiPaneer2").value<0){
                alert("Number of Rotis cannot be negative.");
                location.reload();
            }else{aShahiPaneera = parseFloat($("aShahiPaneer2").value);}
        } 
                
    $("aChickenCurry").onchange = function(){                   //disables the input if the checkbox is unchecked and vice versa, and initialises values to 0
        $("aChickenCurry1").disabled = !this.checked;
        $("aChickenCurry1").value = 0;
        $("aChickenCurry2").value = 0;
    }
    $("aChickenCurry1").onchange = function(){      //validtaes the inputs, calculates, stores and displays in input field
            $("aChickenCurry2").value = eval($("aChickenCurry1").value * $("aChickenCurry").value).toFixed(2);
            if($("aChickenCurry2").value<0){
                alert("Number of Rotis cannot be negative.");
                location.reload();
            }else{aChickenCurrya = parseFloat($("aChickenCurry2").value);}
        } 
    
    $("aSprouts").onchange = function(){                   //disables the input if the checkbox is unchecked and vice versa, and initialises values to 0
        $("aSprouts1").disabled = !this.checked;
        $("aSprouts1").value = 0;
        $("aSprouts2").value = 0;
    }
    $("aSprouts1").onchange = function(){      //validtaes the inputs, calculates, stores and displays in input field
            $("aSprouts2").value = eval($("aSprouts1").value * $("aSprouts").value).toFixed(2);
            if($("aSprouts2").value<0){
                alert("Number of Rotis cannot be negative.");
                location.reload();
            }else{aSproutsa = parseFloat($("aSprouts2").value);}
        }

    $("aFruitSalad").onchange = function(){                   //disables the input if the checkbox is unchecked and vice versa, and initialises values to 0
        $("aFruitSalad1").disabled = !this.checked;
        $("aFruitSalad1").value = 0;
        $("aFruitSalad2").value = 0;
    }
    $("aFruitSalad1").onchange = function(){      //validtaes the inputs, calculates, stores and displays in input field
            $("aFruitSalad2").value = eval($("aFruitSalad1").value * $("aFruitSalad").value).toFixed(2);
            if($("aFruitSalad2").value<0){
                alert("Number of Rotis cannot be negative.");
                location.reload();
            }else{aFruitSalada = parseFloat($("aFruitSalad2").value);}
        }

    $("aVegSalad").onchange = function(){                   //disables the input if the checkbox is unchecked and vice versa, and initialises values to 0
        $("aVegSalad1").disabled = !this.checked;
        $("aVegSalad1").value = 0;
        $("aVegSalad2").value = 0;
    }
    $("aVegSalad1").onchange = function(){      //validtaes the inputs, calculates, stores and displays in input field
            $("aVegSalad2").value = eval($("aVegSalad1").value * $("aVegSalad").value).toFixed(2);
            if($("aVegSalad2").value<0){
                alert("Number of Rotis cannot be negative.");
                location.reload();
            }else{aVegSalada = parseFloat($("aVegSalad2").value);}
        } 
                
    $("aIceCream").onchange = function(){                   //disables the input if the checkbox is unchecked and vice versa, and initialises values to 0
        $("aIceCream1").disabled = !this.checked;
        $("aIceCream1").value = 0;
        $("aIceCream2").value = 0;
    }
    $("aIceCream1").onchange = function(){      //validtaes the inputs, calculates, stores and displays in input field
            $("aIceCream2").value = eval($("aIceCream1").value * $("aIceCream").value).toFixed(2);
            if($("aIceCream2").value<0){
                alert("Number of Rotis cannot be negative.");
                location.reload();
            }else{aIceCreama = parseFloat($("aIceCream2").value);}
        } 

    $("aGulaabJamun").onchange = function(){                   //disables the input if the checkbox is unchecked and vice versa, and initialises values to 0
        $("aGulaabJamun1").disabled = !this.checked;
        $("aGulaabJamun1").value = 0;
        $("aGulaabJamun2").value = 0;
    }
    $("aGulaabJamun1").onchange = function(){      //validtaes the inputs, calculates, stores and displays in input field
            $("aGulaabJamun2").value = eval($("aGulaabJamun1").value * $("aGulaabJamun").value).toFixed(2);
            if($("aGulaabJamun2").value<0){
                alert("Number of Rotis cannot be negative.");
                location.reload();
            }else{aGulaabJamuna = parseFloat($("aGulaabJamun2").value);}
        } 
        
    $("aRasMalai").onchange = function(){                   //disables the input if the checkbox is unchecked and vice versa, and initialises values to 0
        $("aRasMalai1").disabled = !this.checked;
        $("aRasMalai1").value = 0;
        $("aRasMalai2").value = 0;
    }
    $("aRasMalai1").onchange = function(){      //validtaes the inputs, calculates, stores and displays in input field
            $("aRasMalai2").value = eval($("aRasMalai1").value * $("aRasMalai").value).toFixed(2);
            if($("aRasMalai2").value<0){
                alert("Number of Rotis cannot be negative.");
                location.reload();
            }else{aRasMalaia = parseFloat($("aRasMalai2").value);}
        } 
            

    $("aExtra1").onchange = function(){      //validtaes the inputs, calculates, stores and displays in input field
            $("aExtra3").value = eval($("aExtra1").value * $("aExtra2").value).toFixed(2);
            if($("aExtra3").value<0){
                alert("Number of Rotis cannot be negative.");
                location.reload();
            }else{aExtraa = parseFloat($("aExtra3").value);}
    } 
    $("aExtra2").onchange = function(){      //validtaes the inputs, calculates, stores and displays in input field
        $("aExtra3").value = eval($("aExtra1").value * $("aExtra2").value).toFixed(2);
        if($("aExtra3").value<0){
            alert("Number of Rotis cannot be negative.");
            location.reload();
        }else{aExtraa = parseFloat($("aExtra3").value);}
    } 


    $("aButton").onclick = function(){  //validates , adds up all the inputs, calculates Tax amount and makes Discount Button visible..
        var aTotal = parseFloat(aRotia + aParanthaa + aNaana + aEffCurrya + aVegCurrya + aShahiPaneera + aChickenCurrya + aSproutsa + aFruitSalada + aVegSalada + aIceCreama + aGulaabJamuna + aRasMalaia + aExtraa).toFixed(2);
        $("aResult3").value = aTotal;

        if (aTotal <= 0){
            alert("Please Select atleast one item with valid quantity field to calculate bill amount");
            $("aDiscount").hidden = true;
            $("aDisc").hidden = true;
            location.reload();
        }else{
            var aTax = parseFloat(0.08 * aTotal).toFixed(2);
            $("aResult2").value = aTax;

            aTotalAmount = (parseFloat(aTotal) + parseFloat(aTax)).toFixed(2);
            console.log(aTotalAmount);
            $("aResult1").value = aTotalAmount;
            $("aDiscount").hidden = false;
            $("aDisc").hidden = false;
        }
    }

    $("aDiscount").onclick = function(){                //calculates discount, hides the button, and displays the final amount on the screen
        var aRand = parseFloat(Math.floor(Math.random() * 10) + 1);
        $("aDiscountAmount").innerHTML ="Wohoo!!! You have claimed " +aRand+"% Discount -- ("+(aRand*aTotalAmount/100).toFixed(2)+"$)";
        console.log(aRand);

        var aTotalAmount1 = parseFloat(eval(aTotalAmount - (aTotalAmount * aRand / 100))).toFixed(2);
        console.log("Hahah "+aTotalAmount1);
        $("aFinalAmount").innerHTML = "Total Bill to be paid is <span id = 'aaaa'>"+aTotalAmount1+"$</span> only.";
        $("aDiscount").hidden = true;
        $("aDisc").hidden = true;
        $("aButton").disabled = true;
    }
                
    
}