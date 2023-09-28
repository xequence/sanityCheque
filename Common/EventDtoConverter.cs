﻿using SanityCheque.Data;
using SanityCheque.Models;
using SanityCheque.Models.ViewModels;
using System;
using System.Collections.Generic;

namespace SanityCheque.Common
{
    public static class EventDtoConverter
    {
        public static IList<IEvent> ToDto(List<Event> myEvents)
        {
            IList<IEvent> items = new List<IEvent>();
            foreach (var item in myEvents)
            {
                var ev = new EventViewModel()
                {
                    CreatedBy = item.CreatedBy,
                    DateCreated = item.DateCreated,
                    DateUpdated = item.DateUpdated,
                    EventName = item.EventName,
                    EventTypeId = item.EventTypeId,
                    Id = item.Id,
                    Notes = item.Notes,
                    ProfileId = item.ProfileId,
                    WeightOunces = item.WeightOunces,
                    WeightPounds = item.WeightPounds,
                    UpdatedBy = item.UpdatedBy
                };
                items.Add(ev);
            }
            return items;
        }
        public static Event ToDto(IEvent myEvent, int profileId, int eventTypeId)
        {
            var ev = new Event()
            {
                CreatedBy = myEvent.CreatedBy,
                DateCreated = myEvent.DateCreated,
                DateUpdated = myEvent.DateUpdated,
                EventName = myEvent.EventName,
                EventTypeId = eventTypeId,
                Id = myEvent.Id,
                Notes = myEvent.Notes,
                ProfileId = profileId,
                WeightOunces = myEvent.WeightOunces,
                WeightPounds = myEvent.WeightPounds,
                UpdatedBy = myEvent.UpdatedBy
            };
            return ev;
        }
    }
}