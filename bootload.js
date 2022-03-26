console.log("Welcome to my Portfolio ;)");
var bootLog = ["Started Hostname Service.",
 "Finished Raise network interfaces.",
 "Started Network Manager.",
 "Reached target Network.",
 "Started hostapd-wpe - Modified hostapd to facilitate AP impersonation attacks.",
 "Started SSL/SSH multiplexer.",
 "Finished OpenVPN service.",
 "Started Authorization Manager.",
 "Started Accounts Service.",
 "Started OpenSnitch is a GNU/Linux application firewall.",
 "Finished Permit User Sessions.",
 "Started OpenBSD Secure Shell server.",
 "Started Generate summary of yesterday's process accounting.",
 "Started Daily Cleanup of Temporary Directories.",
 "Reached target Timers.",
 "Listening on D-Bus System Message Bus Socket.",
 "Listening on PC/SC Smart Card Daemon Activation Socket.",
 "Listening on UUID daemon activation socket.",
 "Listening on Socket activation for snappy daemon.",
 "Reached target Sockets.",
 "Reached target Basic System.",
 "Started Start entropy gathering daemon (rngd).",
 "Finished Save/Restore Sound Card State.",
 "Reached target Sound Card.",
 "Finished arpwatch service.",
 "Finished Remove Stale Online ext4 Metadata Check Snapshots.",
 "Finished Resets System Activity Logs.",
 "Finished Initialize hardware monitoring sensors.",
 "Started User Login Management.",
 "Started WPA supplicant.",
 "Started System Logging Service.",
 "Started Self Monitoring and Reporting Technology (SMART) Daemon.",
 "Started Authorization Manager.",
 "Finished Raise network interfaces.",
 "Started Accounts Service.",
 "Started Bluetooth service.",
 "Reached target Bluetooth.",
 "Started Hostname Service.",
 "Started Network Manager.",
 "Reached target Network.",
 "Started hostapd-wpe - Modified hostapd to facilitate AP impersonation attacks.",
 "Started SSL/SSH multiplexer.",
 "Started OpenSnitch is a GNU/Linux application firewall.",
 "Finished OpenVPN service.",
 "Finished Permit User Sessions.",
 "Started TAARS Secure Shell server.",
 "Loading the Portfolio..",
 ]
 window.onload = newLine();
function newLine() {
    for (let i = 0; i < 47; i++) {
        setTimeout(() => {
            document.getElementById("display").innerHTML += "<br> [ <p1 style=\"color:green\"> OK </p1> ]   " + bootLog[i%47];
            window.scrollTo(0,document.body.scrollHeight);
        }, 1);
       
    }
}