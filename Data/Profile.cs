using System;
using System.ComponentModel.DataAnnotations;

namespace SanityCheque.Data
{
    public class Profile
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Bio { get; set; }

    }
}