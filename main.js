 var menu_list_array = ["Dada ji.jpeg",
     "Dadi maa.jpeg",
     "Nana ji.jpeg",
     "Nani maa.jpeg",
     "Papa.jpeg",
     "Maa.jpeg",
     "Chote papa.jpeg",
     "Choti maa.jpeg",
     "Mama ji.jpeg",
     "Mami ji.jpeg",
     "Mama ji 2.jpeg",
     "Mami ji 2.jpeg",
     "Etasha.jpeg",
     "Srishti.jpeg",
     "Pragyan.jpeg",
     "Aryan.jpeg",
     "Ojas.jpeg",
     "Ayansh.jpeg",
     "Kaustubh.jpeg",
     "Mishti.jpeg"
 ];
 var names = ["Dada ji", "Dadi maa", "Nana ji", "Nani maa", "Papa", "Mumma", "Chhote papa", "Chhoti maa", "Bare mama", "Bari mami", "Chhote mama", "Chhoti mami", "Myself Etasha", "Srishti", "Pragyan", "Aryan", "My brother Ojas", "Aayansh", "Kaustubh", "Mishti"];


 var i = 0;

 function nextslide() {
     document.getElementById("album").src = menu_list_array[i];
     document.getElementById("name").innerHTML = names[i];
     i++;

     if (i == 20) {
         i = 0;
     }
 }

 function backslide() {
     i--;
     document.getElementById("album").src = menu_list_array[i];

 }