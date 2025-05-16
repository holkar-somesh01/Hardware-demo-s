export const categories = [
  {
    id: 'brass',
    name: 'Brass Hardware',
    image: 'https://plus.unsplash.com/premium_photo-1670333183297-2314678e58fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Premium quality brass handles, knobs, cabinet pulls, and decorative fixtures.'
  },
  {
    id: 'aluminum',
    name: 'Aluminum Hardware',
    image: 'https://images.unsplash.com/photo-1615746363486-92cd8c5e0a90?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lightweight, durable aluminum components for various construction applications.'
  },
  {
    id: 'sliding-door',
    name: 'Sliding Door Hardware',
    image: 'https://m.media-amazon.com/images/I/61jS8MQfsVS._AC_UF1000,1000_QL80_.jpg',
    description: 'Complete solutions for sliding doors, including tracks, rollers, and handles.'
  },
  {
    id: 'plastic',
    name: 'Plastic Hardware',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyB9xVT_DuNU7HNz6_Ic6OefJDsTq5ZiZxyw&s',
    description: 'Cost-effective plastic fittings, accessories, and utility components.'
  }
];

export const productsByCategory: { [key: string]: { id: number; name: string; image: string; description: string }[] } = {
  'brass': [
    {
      id: 1,
      name: 'Decorative Brass Cabinet Pulls',
      image: 'https://s.alicdn.com/@sc04/kf/Af8f6ea113b2f478583d19c146b1381c2X.jpg_720x720q50.jpg',
      description: 'Elegant brass cabinet pulls with antique finish. Available in multiple sizes and designs.'
    },
    {
      id: 2,
      name: 'Brass Door Handles',
      image: 'https://5.imimg.com/data5/ANDROID/Default/2022/1/UU/YR/QF/1014504/product-jpeg.jpg',
      description: 'Premium quality brass door handles that add a touch of luxury to any door.'
    },
    {
      id: 3,
      name: 'Brass Hinges',
      image: 'https://viratgold.in/wp-content/uploads/2023/08/20230721_181648-scaled.jpg',
      description: 'Durable brass hinges for doors and cabinets. Available in various sizes.'
    },
    {
      id: 4,
      name: 'Decorative Brass Knobs',
      image: 'https://s.alicdn.com/@sc04/kf/Hbe668228dfd445caa28fdce946130638d.jpg_720x720q50.jpg',
      description: 'Beautiful brass knobs for cabinets and drawers. Multiple designs available.'
    },
    {
      id: 5,
      name: 'Brass Door Stoppers',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/2/NF/GC/UZ/11409585/brass-door-stopper-500x500.jpeg',
      description: 'Heavy-duty brass door stoppers with elegant designs.'
    },
    {
      id: 6,
      name: 'Brass Drawer Slides',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwrp03ZQR2wq-UTao6jY-v2YqVT5dhLb-kaQ&s',
      description: 'Smooth-operating brass drawer slides for furniture applications.'
    }
  ],
  'aluminum': [
    {
      id: 7,
      name: 'Aluminum Window Frames',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1C51fzcRV44FL_IwThwQ1JlvaWpKD_LafcQ&s',
      description: 'Lightweight, corrosion-resistant aluminum frames for windows.'
    },
    {
      id: 8,
      name: 'Aluminum Door Handles',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30E82WEfDaofNJheGMflFLxBHDZ2xS91eSQ&s',
      description: 'Modern aluminum door handles with brushed finish.'
    },
    {
      id: 9,
      name: 'Aluminum Shower Rails',
      image: 'https://m.media-amazon.com/images/I/71RMwnNTdmL._AC_UF350,350_QL80_.jpg',
      description: 'Rust-proof aluminum shower curtain rails in various sizes.'
    },
    {
      id: 10,
      name: 'Aluminum Extrusion Profiles',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62F8z0N5-Bj5RVt4Ii0JvpmcREXZMVzQdZw&s',
      description: 'Custom aluminum extrusion profiles for various applications.'
    },
    {
      id: 11,
      name: 'Aluminum Drawer Pulls',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVfEVeqwNrS86-nPGxFussCQdP0oQrB4yOw&s',
      description: 'Contemporary aluminum drawer pulls for modern furniture.'
    }
  ],
  'sliding-door': [
    {
      id: 12,
      name: 'Sliding Door Track Systems',
      image: 'https://www.decoranddecor.com/cdn/shop/files/e-slide-wardrobe-sliding-door-kit-2-1500mm-track-919.webp?v=1744050454&width=1600',
      description: 'Complete sliding door track systems including rails and rollers.'
    },
    {
      id: 13,
      name: 'Sliding Door Handles',
      image: 'https://m.media-amazon.com/images/I/61H6yvSCwWL.jpg',
      description: 'Ergonomic handles specifically designed for sliding doors.'
    },
    {
      id: 14,
      name: 'Barn Door Hardware Kits',
      image: 'https://handleshopcouture.com/cdn/shop/files/xios-sliding-barn-door-hardware-kit-mechanism-handle-shop-couture-1.jpg?v=1702848893',
      description: 'Complete hardware kits for barn-style sliding doors.'
    },
    {
      id: 15,
      name: 'Sliding Door Locks',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rt8U9WwOdNiweskERj-ivWVZfG9ZftRO1A&s',
      description: 'Secure locking mechanisms for sliding doors and windows.'
    }
  ],
  'plastic': [
    {
      id: 16,
      name: 'Plastic Drawer Glides',
      image: 'https://images-cdn.ubuy.co.in/6696178bcbc40579472222d9-20-set-plastic-drawer-slides-and-guides.jpg',
      description: 'Economical plastic drawer slides for light-duty applications.'
    },
    {
      id: 17,
      name: 'PVC Pipe Fittings',
      image: 'https://kotharigroupindia.com/products-and-services/pipes/pvc-pipes-and-fittings/images/pvc-agr-moulded-fittings-img.jpg',
      description: 'Various PVC fittings for plumbing and irrigation systems.'
    },
    {
      id: 18,
      name: 'Plastic Furniture Glides',
      image: 'https://images-cdn.ubuy.co.in/66d08fc464656d7ae03de01f-airujia-chair-glides-24pcs-1-inch.jpg',
      description: 'Protective glides to prevent furniture from scratching floors.'
    },
    {
      id: 19,
      name: 'Plastic Cabinet Hinges',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NAMxge-tswc1CA1CTE88JxlPC8mS3z_bbA&s',
      description: 'Durable plastic hinges for lightweight cabinet doors.'
    },
    {
      id: 20,
      name: 'Plastic Cable Management',
      image: 'https://tiimg.tistatic.com/fp/1/008/435/19-inch-1u-plastic-cable-manager-for-network-rack-426.jpg',
      description: 'Cable ties, clips, and channels for organizing wires and cables.'
    }
  ]
};