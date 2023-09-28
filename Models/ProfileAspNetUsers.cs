using System.ComponentModel.DataAnnotations;

namespace SanityCheque.Models
{
    public class ProfileAspNetUsers
    {
        [Key]
        public int ProfileUserId { get; set; }
        public int FK_Profile_Id { get; set; }
        public string FK_AspNetUser_Id { get; set; }
        public string Description { get; set; }
    }
}
