   

    $.get("//covid19.th-stat.com/api/open/today", function (data, status) {

        console.log(data);
        var con = data.Confirmed;
        var newcon = data.NewConfirmed
        var recover = data.Recovered;
        var newrecover = data.NewRecovered;
        var hot = data.Hospitalized;
        var de = data.Deaths;
        var newde = data.NewDeaths;
        var date = data.UpdateDate;
        $("#con").append(con);
        $("#newcon").append("เพิ่มขึ้น("+newcon+")");
        $("#recover").append(recover);
        $("#newrecover").append("เพิ่มขึ้น("+newrecover+")");
        $("#hot").append(hot);
        $("#de").append(de);
        $("#newde").append("เพิ่มขึ้น("+newde+")");
        $("#date").append("อัพเดทข้อมูลล่าสุด : "+date);

    var ct = document.getElementById("MChart");
    var MChart = new Chart(ct, {
    type: 'bar',
    data: {
        labels: ['ติดเชื้อสะสม','หายแล้ว','รักษาอยู่ใน รพ.','เสียชีวิต'],
        datasets: [{
            label: '#ยอดติดเชื้อ',
            data: [data.Confirmed,data.Recovered,data.Hospitalized,data.Deaths],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
               
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
             
            ],
            borderWidth: 1
        }]
    }
    
});
$("#MChart").append(MChart);
    })
    
    $.get("//covid19.th-stat.com/api/open/cases/sum", function (data, status) {
        console.log(data);
        var date = data.UpdateDate;
        $("#table").empty();
        $("#head").empty();
        var head =`<center>
        <h2>PROVINCE</h2>
        <p id="Update"> </p>
        </center>`
        $("#head").append(head)
        $("#Update").append("อัพเดทข้อมูลล่าสุด : "+date);
        var nat = "จังหวัด";
        $("#ch").append(nat);
  for (const key in data.Province) {
      var da = data.Province[key];
                  var row =  `
                  <tr>
                    <td>${key}</td>
                    <td>${da}</td>
                  </tr> 
                `
                $("#table").append(row);
               
      }
        $("#province").click(function () {
            $("#table").empty();
            $("#head").empty();
            $("#ch").empty();
            var nat = "จังหวัด";
            $("#ch").append(nat);
            var head =`
            <center>
            <h2>PROVINCE</h2>
            <p id="Update"> </p>
        
            </center>`
            $("#head").append(head)
            $("#Update").append("อัพเดทข้อมูลล่าสุด : "+date);
      for (const key in data.Province) {
          var da = data.Province[key];
                      var row =  `
                      <tr>
                       
                        <td>${key}</td>
                        <td>${da}</td>
                      </tr>
                   
                    `
                    $("#table").append(row);
                   
          }
         
    })
    $("#nation").click(function () {
        
        $("#table").empty();
        $("#head").empty();
        $("#ch").empty();
        var nat = "ประเทศ";
        $("#ch").append(nat);
        var head =`<center>
        <h2>NATION</h2>
            <p id="Update"> </p>
       
        </center>`
        $("#head").append(head)
        $("#Update").append("อัพเดทข้อมูลล่าสุด : "+date);
  for (const key in data.Nation) {
      var da = data.Nation[key];
                  var row =  `
                  <tr>
                   
                    <td>${key}</td>
                    <td>${da}</td>
                  </tr>
               
                `
                $("#table").append(row);
               
      }     
})
var ke = []
var da =[]
 for (const key in data.Gender) {
       da.push(data.Gender[key]) ;
        ke.push(key);          
             
      } 
 
      
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ke,
        datasets: [{
            label: '' ,
            data: da,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
               
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
             
            ],
            borderWidth: 1
        }]
    }
        
    
});
$("#myChart").append(myChart);
})

