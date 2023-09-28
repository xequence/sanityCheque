using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SanityCheque.Data;
using SanityCheque.Models;

namespace SanityCheque.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventController : ControllerBase
    {
        private readonly KitContext _context;
        public EventController(KitContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Event> Index()
        {
            var myEvents = _context.Event.Where(f => f.ProfileId == 1).ToList(); 


            return myEvents.ToArray();
        }

        
    }
}
