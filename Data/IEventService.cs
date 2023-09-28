using SanityCheque.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SanityCheque.Data
{
    public interface IEventService
    {
        Task<IEvent[]> Get(string userName);
        Task<PagedList<IEvent>> Get(ProductParameters param, string userName);
        Task<PagedList<IEvent>> GetWeightsOverTime(ProductParameters param, string userName);
        void Create(IEvent model, string userName);
        IList<IEvent> GroupedEvents(string userName);
    }
}