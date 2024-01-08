const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);


// Battery API

const battery = () => {
    if('getBattery' in navigator){
        navigator.getBattery()
        .then((battery)=>{
          
          function updateAllBatteryDetails(){
            updateChargingInfo();
            updateLevelChange();
            updateDischargingTimeinfo();
            updateChargingTimeChangeInfo();
          }
          updateAllBatteryDetails();
          
           // Battery Charging Change
           battery.addEventListener('chargingchange',()=>{
             updateChargingInfo();
           })

           function updateChargingInfo(){
            const isCharging = battery.charging ? "Yes" :"No";
            batteryCharging.innerHTML = isCharging;
           }


           //Battery Charging time
           battery.addEventListener('chargingtimechange',()=>{
             updateChargingTimeChangeInfo();
           })

           function updateChargingTimeChangeInfo(){
             batteryChargingTime.innerHTML = battery.chargingTime;
           }


           // Battery discharging time
           battery.addEventListener('dischargingtimechange',()=>{
               updateDischargingTimeinfo();
           })

           function updateDischargingTimeinfo(){
             batteryDisChargingTime.innerHTML = battery.dischargingTime +' seconds';
           }




           // Battery level change
           battery.addEventListener('levelchange',() => {
                  updateLevelChange();
           })
           function updateLevelChange(){
             const level = battery.level * 100+"%";
             batteryLevel.innerHTML = level;
           }
           // Battery status

        })
    }

}
battery();

