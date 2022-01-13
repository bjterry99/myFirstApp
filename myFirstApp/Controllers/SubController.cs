using Microsoft.AspNetCore.Mvc;
using myFirstApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myFirstApp.Controllers
{
    public class SubController : Controller
    {
        public IActionResult Index ()
        {
            return View();
        }

        [HttpGet]

        public IActionResult Calc ()
        {
            return View();
        }

        [HttpPost]

        public IActionResult Calc (CalcModel model)
        {
            return View();
        }
    }
}
