export const categories = [
  {
    id: 'brass',
    name: 'Brass Hardware',
    image: 'https://images.pexels.com/photos/2184998/pexels-photo-2184998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Premium quality brass handles, knobs, cabinet pulls, and decorative fixtures.'
  },
  {
    id: 'aluminum',
    name: 'Aluminum Hardware',
    image: 'https://images.pexels.com/photos/944686/pexels-photo-944686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Lightweight, durable aluminum components for various construction applications.'
  },
  {
    id: 'sliding-door',
    name: 'Sliding Door Hardware',
    image: 'https://images.pexels.com/photos/6306167/pexels-photo-6306167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Complete solutions for sliding doors, including tracks, rollers, and handles.'
  },
  {
    id: 'plastic',
    name: 'Plastic Hardware',
    image: 'https://images.pexels.com/photos/5824634/pexels-photo-5824634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Cost-effective plastic fittings, accessories, and utility components.'
  }
];

export const productsByCategory: { [key: string]: { id: number; name: string; image: string; description: string }[] } = {
  'brass': [
    {
      id: 1,
      name: 'Decorative Brass Cabinet Pulls',
      image: 'https://images.pexels.com/photos/4240613/pexels-photo-4240613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Elegant brass cabinet pulls with antique finish. Available in multiple sizes and designs.'
    },
    {
      id: 2,
      name: 'Brass Door Handles',
      image: 'https://images.pexels.com/photos/5824502/pexels-photo-5824502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Premium quality brass door handles that add a touch of luxury to any door.'
    },
    {
      id: 3,
      name: 'Brass Hinges',
      image: 'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Durable brass hinges for doors and cabinets. Available in various sizes.'
    },
    {
      id: 4,
      name: 'Decorative Brass Knobs',
      image: 'https://images.pexels.com/photos/2184998/pexels-photo-2184998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Beautiful brass knobs for cabinets and drawers. Multiple designs available.'
    },
    {
      id: 5,
      name: 'Brass Door Stoppers',
      image: 'https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Heavy-duty brass door stoppers with elegant designs.'
    },
    {
      id: 6,
      name: 'Brass Drawer Slides',
      image: 'https://images.pexels.com/photos/399161/pexels-photo-399161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Smooth-operating brass drawer slides for furniture applications.'
    }
  ],
  'aluminum': [
    {
      id: 7,
      name: 'Aluminum Window Frames',
      image: 'https://images.pexels.com/photos/16797355/pexels-photo-16797355/free-photo-of-close-up-of-window-frame.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Lightweight, corrosion-resistant aluminum frames for windows.'
    },
    {
      id: 8,
      name: 'Aluminum Door Handles',
      image: 'https://images.pexels.com/photos/2246444/pexels-photo-2246444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Modern aluminum door handles with brushed finish.'
    },
    {
      id: 9,
      name: 'Aluminum Shower Rails',
      image: 'https://images.pexels.com/photos/8030430/pexels-photo-8030430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Rust-proof aluminum shower curtain rails in various sizes.'
    },
    {
      id: 10,
      name: 'Aluminum Extrusion Profiles',
      image: 'https://images.pexels.com/photos/944686/pexels-photo-944686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Custom aluminum extrusion profiles for various applications.'
    },
    {
      id: 11,
      name: 'Aluminum Drawer Pulls',
      image: 'https://images.pexels.com/photos/5825352/pexels-photo-5825352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Contemporary aluminum drawer pulls for modern furniture.'
    }
  ],
  'sliding-door': [
    {
      id: 12,
      name: 'Sliding Door Track Systems',
      image: 'https://images.pexels.com/photos/6306167/pexels-photo-6306167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Complete sliding door track systems including rails and rollers.'
    },
    {
      id: 13,
      name: 'Sliding Door Handles',
      image: 'https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Ergonomic handles specifically designed for sliding doors.'
    },
    {
      id: 14,
      name: 'Barn Door Hardware Kits',
      image: 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Complete hardware kits for barn-style sliding doors.'
    },
    {
      id: 15,
      name: 'Sliding Door Locks',
      image: 'https://images.pexels.com/photos/7937360/pexels-photo-7937360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Secure locking mechanisms for sliding doors and windows.'
    }
  ],
  'plastic': [
    {
      id: 16,
      name: 'Plastic Drawer Glides',
      image: 'https://images.pexels.com/photos/5824634/pexels-photo-5824634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Economical plastic drawer slides for light-duty applications.'
    },
    {
      id: 17,
      name: 'PVC Pipe Fittings',
      image: 'https://images.pexels.com/photos/2884866/pexels-photo-2884866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Various PVC fittings for plumbing and irrigation systems.'
    },
    {
      id: 18,
      name: 'Plastic Furniture Glides',
      image: 'https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Protective glides to prevent furniture from scratching floors.'
    },
    {
      id: 19,
      name: 'Plastic Cabinet Hinges',
      image: 'https://images.pexels.com/photos/9593451/pexels-photo-9593451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Durable plastic hinges for lightweight cabinet doors.'
    },
    {
      id: 20,
      name: 'Plastic Cable Management',
      image: 'https://images.pexels.com/photos/4792730/pexels-photo-4792730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Cable ties, clips, and channels for organizing wires and cables.'
    }
  ]
};