using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Data.Entity;

namespace DoctorForm.Data
{
    public class DataInitializer
    {
        public static void Initialize(DoctorContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Doctors.Any())
            {
                return;   // DB has been seeded
            }
            var doctors = new List<Doctor>
            {
            new Doctor{FirstMidName="Carson",LastName="Alexander"},
            new Doctor{FirstMidName="Meredith",LastName="Alonso"},
            new Doctor{FirstMidName="Arturo",LastName="Anand"},
            new Doctor{FirstMidName="Gytis",LastName="Barzdukas"},
            new Doctor{FirstMidName="Yan",LastName="Li"},
            new Doctor{FirstMidName="Peggy",LastName="Justice"},
            new Doctor{FirstMidName="Laura",LastName="Norman"},
            new Doctor{FirstMidName="Nino",LastName="Olivetto"}
            };

            doctors.ForEach(s => context.Doctors.Add(s));
            context.SaveChanges();

            var patients = new List<Patient>
            {
            new Patient{Name="Chemistry",Birthday=Convert.ToDateTime("2012-02-13 00:00:00.000"),
            HealthNumber="1234561234567890",Address="skdjdks",PhoneNumber="2045555555",DoctorId=1,Essay="nothing"}
            };
            patients.ForEach(s => context.Patients.Add(s));
            context.SaveChanges();
        }
    }
}
