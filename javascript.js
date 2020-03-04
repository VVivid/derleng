function button() {
  var button = document.getElementById('login-form');
  if (button.style.display == "none") {
    button.style.display = "block"
  }
  else {
    button.style.display = "none"
  }
}

function search(){
  var search = document.getElementById('search').value;
  var search_test_phnome_penh = /^([P]|[p])[A-Za-z ]{4,20}([H]|[h])$/;
  var search_test_Siem_Reap = /^([S]|[s])[A-Za-z ]{4,20}([R]|[r])$/;
  var search_test_Battambang = /^([B]|[b])[A-Za-z ]{4,20}([G]|[g])$/;
  var search_test_Preah_Sihonouk = /^([P]|[p])[A-Za-z ]{4,20}([K]|[k])$/;
  var search_test_Kampot = /^([K]|[k])[A-Za-z ]{4,20}([T]|[t])$/
  var search_test_Kratié = /^([K]|[k])[A-Za-z ]{4,20}([E]|[e])$/
  var search_test_Kampon_Chhnang = /^([K]|[k])[A-Za-z ]{4,20}([G]|[g])$/
  var search_test_Kampong_Cham = /^([K]|[k])[A-Za-z ]{4,20}([M]|[m])$/
  var search_test_Kampong_Speu = /^([K]|[k])[A-Za-z ]{4,20}([U]|[u])$/
  var search_test_Kampong_Thom = /^([K]|[k])[A-Za-z ]{4,20}([M]|[m])$/
  var search_test_Kandal = /^([K]|[k])[A-Za-z ]{4,20}([L]|[l])$/
  var search_test_Kep = /^([K]|[k])([E]|[e])([P]|[p])$/
  var search_test_Banteay_Meanchey = /^([B]|[b])[A-Za-z ]{4,20}([Y|[y])$/
  var search_test_Preah_Vihea = /^([P]|[p])[A-Za-z ]{4,20}([a]|[A])$/
  var search_test_Koh_Kong = /^([K]|[k])[A-Za-z ]{4,20}([G]|[g])$/
  var search_test_prey_veng = /^([P]|[p])[A-Za-z ]{4,20}([G]|[g])$/
  var search_test_pursat = /^([P]|[p])[A-Za-z ]{4,20}([T]|[t])$/
  var search_test_Steung_Treng= /^([S]|[s])[A-Za-z ]{4,20}([G]|[g])$/
  var search_test_Svay_Rieng = /^([S]|[s])[A-Za-z ]{4,20}([G]|[g])$/
  var search_test_Ratana_Kiri = /^([R]|[r])[A-Za-z ]{4,20}([I]|[i])$/
  var search_test_Takéo = /^([T]|[t])[A-Za-z ]{4,20}([O]|[o])$/
  var search_test_Oddar_Meanchey= /^([O]|[o])[A-Za-z ]{4,20}([Y]|[y])$/
  var search_test_Mondulkiri = /^([M]|[m])[A-Za-z ]{4,20}([I]|[i])$/
  var search_test_Pailin = /^([P]|[p])[A-Za-z ]{4,20}([N]|[n])$/
  var search_test_Tboung_Khmum = /^([T]|[t])[A-Za-z ]{4,20}([M]|[m])$/
  if (search_test_phnome_penh.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-pp'
  }
  else if (search_test_Siem_Reap.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-sr'
  }
  else if (search_test_Battambang.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-btb'
  }
  else if (search_test_Preah_Sihonouk.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-pshn'
  }
  else if (search_test_Kampot.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-kp'
  }
  else if (search_test_Kratié.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-kt'
  }
  else if (search_test_Kampong_Cham.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-kpch'
  }
  else if (search_test_Kampong_Speu.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-kps'
  }
  else if (search_test_Kampong_Thom.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-kpt'
  }
  else if (search_test_Kandal.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-kd'
  }
  else if (search_test_Kep.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-kep'
  }
  else if (search_test_Banteay_Meanchey.test(search)){
    location.href='http://127.0.0.1:5000/open2.html#t-btmch'
  }
  else if (search_test_Preah_Vihea.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-pvh'
  }
  else if (search_test_Koh_Kong.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-kk'
  }
  else if (search_test_prey_veng.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-pv'
  }
  else if (search_test_Kampon_Chhnang.test(search)){
    location.href= 'http://127.0.0.1:5500/open2.html#t-kpch'
  }
  else if (search_test_pursat.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-ps'
  }
  else if (search_test_Steung_Treng.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-st'
  }
  else if (search_test_Svay_Rieng.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-svr'
  }
  else if (search_test_Ratana_Kiri.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-rtnkr'
  }
  else if (search_test_Takéo.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-tk'
  }
  else if (search_test_Oddar_Meanchey.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-odmc'
  }
  else if (search_test_Mondulkiri.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-mdkr'
  }
  else if (search_test_Pailin.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-pl'
  }
  else if (search_test_Tboung_Khmum.test(search)){
    location.href='http://127.0.0.1:5500/open2.html#t-tbk'
  }
}
function login()
{
  var usernameregister = getElementById("usernameregister").value;
  var passwordregister = getElementById("usernameregister").value;
}


