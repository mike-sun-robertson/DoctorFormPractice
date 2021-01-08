using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorForm.Data
{
    public class Patient
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public DateTime Birthday { get; set; }
        public string HealthNumber { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public int DoctorId { get; set; }
        public string Essay { get; set; }



    }
}

