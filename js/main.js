$(document).ready(function () {

   getBuild();

})


function drawTable(data) {

   // Get Table headers and print
   var head = $("<tr />")
   $("#DataTable").append(head);
   head.append($("<th>Name</th>"));
   head.append($("<th>Count</th>"));
   head.append($("<th>Date</th>"));

   // Print the content of rows in DataTable
   for (var i = 0; i < data.length; i++) {
      drawRow(data[i]);

   }

}

function drawRow(rowData) {
   var row = $("<tr />")
   $("#DataTable").append(row);
   row.append($("<td>" + rowData[0] + "</td>"));
   row.append($("<td>" + rowData[1] + "</td>"));
   row.append($("<td>" + rowData[2] + "</td>"));
}

function getBuild() {
   // MSSQL
   $.ajax({
      type: 'POST',
      url: './php/getBuild.php',
      dataType: "json",
      data: {
      },
      success: function (data1) {
         if (data1.status == 'ok') {
            var correctedDate;
            drawTable(data1["result"])
         } else {

            alert("Данные не найдены...");
         }
      }
   });


   // Затычка


}

function tableSearch() {
   var phrase = document.getElementById('search-text');
   var table = document.getElementById('DataTable');
   var regPhrase = new RegExp(phrase.value, 'i');
   var flag = false;
   for (var i = 1; i < table.rows.length; i++) {
      flag = false;
      for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
         flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
         if (flag) break;
      }
      if (flag) {
         table.rows[i].style.display = "";
      } else {
         table.rows[i].style.display = "none";
      }

   }
}