using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SanityCheque.Models
{
    public class Profile
    {
        [Key]
        public int Id { get; set; }
        public string Bio { get; set; }
        public string ImageUrl { get; set; }
        public string Name { get; set; }
        [ForeignKey("Gender")]
        public int GenderId { get; set; }
        public DateTime DateOfBirth { get; set; }
        
    }
}
