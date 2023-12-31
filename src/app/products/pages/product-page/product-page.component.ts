import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { Product, ProductCard } from '../../product';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  id!: number;
  product?: Product;


  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>;

  contents: ProductCard[] = [
    {
      title: 'Computer',
      description: 'Description about computer...',
      url: 'https://picsum.photos/id/1/640/480',
    },
    {
      title: 'Building',
      description: 'Building description...',
      url: 'https://picsum.photos/id/101/640/480',
    },
    {
      title: 'Glass over a computer',
      description: 'Description of a glass over a computer',
      url: 'https://picsum.photos/id/201/640/480',
    },
    {
      title: 'Autumn',
      description: 'Description about autumn leaves',
      url: 'https://picsum.photos/id/301/640/480',
    },
    {
      title: 'Balloon',
      description: 'Coloured balloon',
      url: 'https://picsum.photos/id/401/640/480',
    },
  ];

  index = 0;

  // Swiper
  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    navigation: true,
  };

  swiperThumbsConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  };


  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.productsService.getProductById(this.id).subscribe((res) => {
      console.log(res);
      this.product = res;
    });
  }

  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.activeIndex = this.index;
    this.swiperThumbs.nativeElement.swiper.activeIndex = this.index;
  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }
}
