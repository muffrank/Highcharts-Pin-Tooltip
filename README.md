# Highcharts-Pin-Tooltip
Pin highcharts tooltip 

#Install by npm

`npm install git+https://github.com/muffrank/Highcharts-Pin-Tooltip.git`

#usage
`
var pinned;
$('#container').bind('mousedown', function () {console.log(35)
    $('#container').highcharts().tooltip[pinned ? 'unpin' : 'pin']();
    pinned = !pinned;
});

`
#OR

`
plotOptions: {
    series: {
      point:{
      events:{
        click: function(){
          var chart = this.series.chart;
           chart.tooltip[this.series.chart.pinned ? 'unpin' : 'pin']();
           chart.pinned = !this.series.chart.pinned;
        }
      }
      }
    }
  }
`
