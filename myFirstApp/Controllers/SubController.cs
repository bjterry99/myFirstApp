using Microsoft.AspNetCore.Mvc;
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

        public IActionResult Calc ()
        {
            return View();
        }
    }
}
