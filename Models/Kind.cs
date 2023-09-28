using System.ComponentModel.DataAnnotations;

namespace SanityCheque.Models
{
    public class Kind
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
