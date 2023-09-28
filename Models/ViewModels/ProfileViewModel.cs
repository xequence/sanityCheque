using SanityCheque.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SanityCheque.Models.ViewModels
{
    public class ProfileViewModel : IProfile
    {
        public int Id { get; set; }
        public string Bio { get; set; }
        public string ImageUrl { get; set; }
        public string Name { get; set; } 
        public int GenderId { get; set; }
        public DateTime DateOfBirth { get; set; }
    }
}
