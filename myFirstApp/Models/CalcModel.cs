using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace myFirstApp.Models
{
    public class CalcModel
    {

        [Required]
        [Range(0, 100)]
        public string Assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public string Group_project { get; set; }

        [Required]
        [Range(0, 100)]
        public string Quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public string Exams { get; set; }

        [Required]
        [Range(0, 100)]
        public string Intex { get; set; }

        //public void setFrom (string input)
        //{
        //    this.From = input;
        //}

        //public string getFrom ()
        //{
        //    return this.From;
        //}
    }
}
