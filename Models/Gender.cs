using System.ComponentModel.DataAnnotations;

namespace SanityCheque.Models
{
    public class Gender
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
