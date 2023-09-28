using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SanityCheque.Models
{
    public class SimpleGrant
    {
        [EmailAddress]
        [Required]
        public string Email { get; set; }
    }
}
