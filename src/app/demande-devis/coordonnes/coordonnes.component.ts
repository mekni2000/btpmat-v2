import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/espace-client/shared/auth.service';
import { Observable, from, fromEvent } from 'rxjs';
import { filter, flatMap, map, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { BrandService } from 'src/app/boutique/shared/brand.service';
import { Page } from 'src/app/models/pagiantion.model';
import { HttpEventType, HttpClient, HttpHeaders } from '@angular/common/http';
import { DevisService } from '../shared/devis.service';
import { CategoriesService } from 'src/app/common1/shared/categories.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-coordonnes',
  templateUrl: './coordonnes.component.html',
  styleUrls: ['./coordonnes.component.css',
  './coordonnesR.component.css'
]
})
export class CoordonnesComponent implements OnInit {

  user: User
  user$: Observable<any>
  categories$: Observable<any>
  countries$: Observable<any>
  addChamps: boolean=true;
 
  constructor(
    private auth: AuthService,
    private brandService: BrandService,
    private devisService: DevisService,
    private categoryService: CategoriesService,
    private renderer: Renderer2,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.user = new User()


   this.categories$ = this.categoryService.subCategories().pipe(
     tap((categories: Page<any>) => {return categories.results})
   )
   this.categories$.subscribe(categories => console.log('all categories', categories))
    

   this.countries$ = this.brandService.getCountries()
   this.countries$.subscribe(countries => console.log('all countries', countries))
  }

   

   

  requestQuotation(){
    //getUser
    this.auth.getCurrentUser().then(user => {
      this.user$ =  this.auth.getUser(user.uid)
 
       this.user$.subscribe(user => {
    
           let newQuot = {
             email: user.email,
             phone: user.phone,
             orderCategoryId: this.categoryId,
             imageId: this.uploded[0],
             documentId: 0,
             description: this.user.description,
             countries: this.country,
             personalInfo: {
              firstName: this.user.firstName,
              lastName: this.user.lastName,
              description: this.user.description
             },
             professionalInfo:{
              businessName: this.user.businessName,
              address: this.user.address,
              regCom: this.user.regCom
             }
           }
           console.log(newQuot)
           this.devisService.addQuotation(user.id, newQuot).subscribe(data => {
             console.log('newOuotation', data)
           })

       
         
       })
     })
  }

  accountType
  selectAccountType(event){
    console.log(event)
    return this.accountType = event
  }

  categoryId
  selectedCategory
  selectCategory(event){
    console.log(event)
    this.categoryId = event
    let category = document.querySelector('.category_name > option:checked')
    return this.selectedCategory = category.textContent
  
  }

  country
  selectCountry(event){
    console.log(event)
    return this.country = event
    
  }


   isLEAD(user: User)  {
    return ( user.accountType === "LEAD" );
  }





  images = []
  imageUpload = []
  uploded = []
  error: string;
  uploadError: string;
  button = "Publier l'annonce";
  isLoading = false;
  fileInput = false;

  @ViewChild('image', {static: true}) private image: ElementRef;


  onSelectedFile(event) {

    for (var i = 0; i < event.target.files.length; i++) { 
      this.imageUpload.push(event.target.files[i]);
    }

    console.log(this.imageUpload)

    if (event.target.files.length > 0) {
    
      var reader = new FileReader();

      reader.onload = (event:any) => {
        const li: HTMLLIElement = this.renderer.createElement('li');

        const img: HTMLImageElement = this.renderer.createElement('img');
        img.src = event.target.result
      
        // this.images.push((res.body as any).id)
        this.renderer.addClass(img, 'product-image');
       
        const a: HTMLAnchorElement = this.renderer.createElement('a');
        const iconDelete:HTMLImageElement=this.renderer.createElement('img'); 
        iconDelete.src = '../assets/img/delete-img.png'
        this.renderer.appendChild(a, iconDelete);
        this.renderer.addClass(a, 'delete-btn');
        a.addEventListener('click', this.deleteProductImage.bind(this, img.src, a));
        
        this.renderer.appendChild(this.image.nativeElement, li);
        this.renderer.appendChild(li, img);
        this.renderer.appendChild(li, a);
         this.images.push(event.target.result); 
         this.fileInput = true
      }

      reader.readAsDataURL(event.target.files[0]);
      
  
    }
    
  }
  onSelectedPdf(event) {

    for (var i = 0; i < event.target.files.length; i++) { 
      this.imageUpload.push(event.target.files[i]);
    }

    console.log(this.imageUpload)

    if (event.target.files.length > 0) {
    
      var reader = new FileReader();

      reader.onload = (event:any) => {
        const li: HTMLLIElement = this.renderer.createElement('li');

        const img: HTMLImageElement = this.renderer.createElement('img');
        img.src = event.target.result
      
        // this.images.push((res.body as any).id)
        this.renderer.addClass(img, 'product-image');
       
        const a: HTMLAnchorElement = this.renderer.createElement('a');
        const iconDelete:HTMLImageElement=this.renderer.createElement('img'); 
        iconDelete.src = '../assets/img/delete-img.png'
        this.renderer.appendChild(a, iconDelete);
        this.renderer.addClass(a, 'delete-btn');
        a.addEventListener('click', this.deleteProductImage.bind(this, img.src, a));
        
        this.renderer.appendChild(this.image.nativeElement, li);
        this.renderer.appendChild(li, img);
        this.renderer.appendChild(li, a);
         this.images.push(event.target.result); 
         this.fileInput = true
      }

      reader.readAsDataURL(event.target.files[0]);
      
  
    }
    
  }

  uploadImages(file){

    
   
    const frmData = new FormData();
   
   frmData.append("file", file);
   this.http.post('https://api.btpmat.ci/api/FileSources', frmData, { reportProgress: true, observe: 'events'})
 .subscribe(  res => {
 
   if (res.type === HttpEventType.UploadProgress) {
     this.isLoading = true;
     const percentDone = Math.round(100 * res.loaded / res.total);
   
     Swal.fire({
       title: 'Auto close alert!',
       html: 'I will close after <b></b> % complete. ',
       timer: 2000,
       timerProgressBar : true,
       onBeforeOpen: () => {
         const content = Swal.getContent()
           if (content) {
             const b: any = content.querySelector('b')
             if (b) {
               b.textContent = percentDone
             }
           }
       }
     }).then((result) => {
       /* Read more about handling dismissals below */
       if (result.dismiss === Swal.DismissReason.timer) {
         console.log('I was closed by the timer')
       }
     })



   }
  else if (res.type == HttpEventType.Response) {
     this.isLoading = false;
     this.uploadError = '';
     // console.log(`File is ${(res.body as any).name}% uploaded.`);
     console.log(res.body)
 
     // image = (res.body as any)
     this.uploded.push((res.body as any).id);
     // 
     // // this.images.push((res.body as any).id)
        console.log("image is uploaded", this.images)
     if(this.uploded.length === this.imageUpload.length){
       this.requestQuotation()
      
     }  
      
   }
 
 })

 }



  
  deleteProductImage(filename, a) {
    console.log(filename)
    const formData = new FormData();
    formData.append('file', filename.id);
    // this.productService.deleteImage(filename.id).subscribe(
    //   res => {
    //     console.log('removed', res)
    //     a.parentElement.remove();
    //     var index = this.imageUpload.indexOf(filename.id);

    //     this.imageUpload.splice(index, 1); // Removes one el
    //   },
    //   err => this.error = err
    // );
  }


  uploadAll(){
    let fileUploadObservables = [];

    this.imageUpload.forEach(file => {
  
       fileUploadObservables
       .push(this.uploadImages(file));
    });
 
 
    //  Observable.forkJoin(...fileUploadObservables)
    //          .subscribe((res) => {
    //            console.log('---------------------', res)
    //          });
  
  }



  // onClose(data: any) {
  //   this.close.emit(data);
  // }



  

  selectedFile: File
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile)
    this.devisService.uploadImage(this.selectedFile).subscribe(data => {
      console.log('image uploaded', data)
    })
  }

  onUpload() {
    // this.http is the injected HttpClient
    this.devisService.uploadImage(this.selectedFile).subscribe(data => {
      console.log('image uploaded', data)
    })
  
  }





  onSeleted(){
    
    let wrapper = document.querySelector('.devis_wrapper')
    let btn = document.querySelector('.devis_details')
    fromEvent(wrapper, 'click').pipe(
      map(event => event)
    ).subscribe(
      event => {
        btn.classList.add('is-active')
        wrapper.classList.add('hide')
      }
    )
  }


}
