using System.Threading.Tasks;
using ElectronNET.API;
using ElectronNET.API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Movie.AspNet.App.Controllers
{
    [Route("api/electron")]
    [ApiController]
    public class ElectronController : ControllerBase
    {
        public class Body
        {
            public string Title { get; set; }
            public string Message { get; set; }
        }

        [HttpPost("notify")]
        public void Notify([FromBody] Body body)
        {
            var options = new NotificationOptions(body.Title, body.Message)
            {
                OnClick = async () => await Electron.Dialog.ShowMessageBoxAsync("Notification clicked")
            };

            Electron.Notification.Show(options);
        }
    }
}
