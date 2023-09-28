using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SanityCheque.Data;
using SanityCheque.Models;

namespace SanityCheque.Controllers
{
    public class EventDataController : Controller
    {
        private readonly KitContext _context;
        public EventDataController(KitContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Create()
        {
            var model = new Event();
            model.DateCreated = DateTime.Now;
            return View(model);
        }
        [HttpPost]
        public IActionResult Create(Event model)
        {
            if (ModelState.IsValid)
            {
                var exists = _context.EventType.Where(f => f.Name == model.EventName).FirstOrDefault();
                if (exists == null)
                {
                    var eventType = new EventType { Name = model.EventName, DateCreated = DateTime.Now, CreatedBy = "System" };
                    _context.EventType.Add(eventType);
                    _context.SaveChanges();
                    model.CreatedBy = "System";
                    model.EventTypeId = eventType.Id;
                    model.EventName = model.EventName;
                    model.ProfileId = 1;

                    _context.Event.Add(model);
                    _context.SaveChanges();
                }
                else
                {
                    model.CreatedBy = "System";
                    model.EventTypeId = exists.Id;
                    model.EventName = model.EventName;
                    model.ProfileId = 1;

                    _context.Event.Add(model);
                    _context.SaveChanges();
                }


                return Redirect("/events");
            }

            return View(model);
        }
    }
}
