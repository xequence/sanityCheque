using System;
using System.ComponentModel.DataAnnotations;

namespace SanityCheque.Data
{
    public class EventType
    {
        public string Name { get;   set; }
        public DateTime DateCreated { get;   set; }
        public string CreatedBy { get;   set; }
        [Key]
        public int Id { get;   set; }
    }
}