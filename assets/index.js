export default {
    data() {
      return {
      }
    },
    mounted() {
        var dd = "2020-2-14"
        var s = dd.split("-");
        var d = new Date(s[0], s[1], s[2], 10, 33);
        var date = new Date();
        console.log(new Date());
        console.log(d);
    
        console.log((new Date().getTime() - d.getTime())/ (1000 * 60 * 60));
    }
  } 