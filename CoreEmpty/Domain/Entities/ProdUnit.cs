using NetTopologySuite.Geometries;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoreEmpty.Domain.Entities
{
    public class ProdUnit: BaseEntity
    {
        public string Name { get; set; }
        public long? DepartmentId { get; set; }
        [ForeignKey("DepartmentId")]
        public virtual Department Department { get; set; }
        [Column(TypeName = "geography")]
        public Point Point { get; set; }
    }
}

