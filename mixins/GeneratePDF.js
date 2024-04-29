import { jsPDF } from "jspdf";

export default {
  methods:{
    generatePDF(element,file_name) {
        const doc = new jsPDF({ unit: 'pt' }) // create jsPDF object
        const pdfElement = element // HTML element to be converted to PDF

        doc.html(pdfElement, {
          callback: (pdf) => {
            pdf.save(file_name+'.pdf')
          },
          margin: 32, // optional: page margin
          // optional: other HTMLOptions
        })
        }
  }
}
